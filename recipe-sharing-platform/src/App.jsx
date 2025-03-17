import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-center items-center p-6">
          <h1 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Welcome to Recipe Sharing Platform!
          </h1>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
