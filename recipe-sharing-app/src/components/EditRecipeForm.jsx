import React, { useState } from "react";
import useRecipeStore from "../store/recipeStore";

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [formData, setFormData] = useState({
    title: recipe.title,
    description: recipe.description,
  });

  // Handle input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Fix: Prevent page refresh

    updateRecipe(recipe.id, formData); // ✅ Update the recipe in Zustand store
    onClose(); // ✅ Close the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;

