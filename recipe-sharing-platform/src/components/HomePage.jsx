import { useState, useEffect } from 'react';
import recipeData from '../data.json';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300" />
            <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-green-600">{recipe.title}</h2>
            <p className="text-gray-600 text-sm">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
