import { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError('All fields are required!');
      return;
    }

    const ingredientsList = ingredients.split(',').map(item => item.trim());
    if (ingredientsList.length < 2) {
      setError('Please include at least two ingredients.');
      return;
    }

    setError('');
    // Handle form submission (optional: add console or alert for now)
    console.log({ title, ingredientsList, steps });
    alert('Recipe submitted successfully!');

    // Clear form fields
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Add a New Recipe</h2>
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter recipe title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Ingredients (separated by commas)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="E.g., Rice, Chicken, Tomatoes"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Describe the cooking steps here"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
