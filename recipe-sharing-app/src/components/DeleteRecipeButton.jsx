import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Fix: Import useNavigate
import useRecipeStore from "../store/recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ Fix: Initialize useNavigate

  const handleDelete = () => {
    deleteRecipe(recipeId); // ✅ Delete recipe from Zustand store
    navigate("/"); // ✅ Redirect to homepage or recipe list after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
