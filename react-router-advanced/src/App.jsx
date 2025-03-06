import { useState } from 'react'
import './App.css'
import React from "react";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Post from "./pages/Post.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPost from "./pages/BlogPost"; // Import the BlogPost component

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* Protected Route for Profile */}
    
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>

     <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/*" element={<Profile />} />
      <Route path="/post/:postId" element={<Post />} />  {/* Dynamic Route */}
      <Route path="/blog/:id" element={<BlogPost />} />  {/* Dynamic Route */}
      <Route path="*" element={<NotFound />} />  {/* Catch-all for unknown routes */}
    </Routes>
    </Router>
      
    </>
  )
}

export default App
