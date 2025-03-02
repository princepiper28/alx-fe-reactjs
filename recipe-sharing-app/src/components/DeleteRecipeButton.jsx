import useRecipeStore from "../store/recipeStore";

const DeleteRecipeButton = ({ recipeId, navigate }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // Redirect to homepage
  };

  return <button onClick={handleDelete} style={{ background: "red", color: "white" }}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
