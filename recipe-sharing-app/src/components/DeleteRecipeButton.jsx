import useRecipeStore from "../store/recipeStore";

const DeleteRecipeButton = ({ id, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
    alert("Recipe deleted!");
    if (onDelete) onDelete();
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
