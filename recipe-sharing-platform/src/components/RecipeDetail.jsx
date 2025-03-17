import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10 text-gray-500">Recipe not found...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md mb-6" />
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-lg mb-6">{recipe.summary}</p>
      <div className="bg-white p-4 shadow rounded-md mb-4">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-1">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-4 shadow rounded-md">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal pl-6 space-y-1">
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
