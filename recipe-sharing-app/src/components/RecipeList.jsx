import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  // Choose to display filtered results if available, otherwise show all recipes
  const displayedRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {displayedRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {displayedRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;

