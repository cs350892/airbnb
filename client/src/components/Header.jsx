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