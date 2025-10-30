import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Navbar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏠</span>
              <span className="text-xl font-bold text-rose-500">Airbnb</span>
            </div>
            
            {/* Navigation Links */}
            <div className="flex space-x-4">
              <a 
                href="/" 
                className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                Home
              </a>
              <a 
                href="/login" 
                className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                Login
              </a>
              <a 
                href="/register" 
                className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 font-medium"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Routes - Each page loads completely */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;