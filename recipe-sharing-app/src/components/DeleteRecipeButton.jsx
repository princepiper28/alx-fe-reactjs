import useRecipeStore from "../store/recipeStore";

const DeleteRecipeButton = ({ id, navigate }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/");
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;

