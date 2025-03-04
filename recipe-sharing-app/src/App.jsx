import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import React from 'react';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />  {/* ✅ Add Search Bar */}
        <AddRecipeForm />
        <RecipeList />  {/* ✅ Display Filtered Recipes */}
      </div>
    </Router>
  );
};

export default App;
