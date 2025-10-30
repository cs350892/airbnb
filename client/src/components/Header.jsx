<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl">🏠</span>
          <span className="text-xl font-bold text-pink-500">Airbnb</span>
        </Link>
        <nav className="flex space-x-4">
          <Link to="/login" className="text-gray-600 hover:text-gray-900">
            Login
          </Link>
          <Link to="/register" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
=======
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🏠</span>
            <span className="text-xl font-bold text-rose-500">Airbnb</span>
          </Link>
          
          <nav className="flex space-x-4">
            <Link 
              to="/login" 
              className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 font-medium"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
>>>>>>> 386977098c00456034c0843ce54344935016c99c
