import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Jollof Rice", description: "A delicious Nigerian rice dish." },
    { id: 2, title: "Egusi Soup", description: "A rich melon seed soup." }
  ],

  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, { id: Date.now(), ...newRecipe }]
  })),

  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),

  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  }))
}));

export default useRecipeStore;
