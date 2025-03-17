import { Link } from 'react-router-dom';
import recipeData from '../data.json';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Recipe Sharing Platform</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-green-600 transition-colors duration-300">
                {recipe.title}
              </h3>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
