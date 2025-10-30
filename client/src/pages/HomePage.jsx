<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Welcome to Airbnb Clone
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Find your perfect place to stay
      </p>
     
    </div>
  );
}

export default HomePage;
=======
import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Airbnb Clone
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Practice React Router with this simple project
        </p>
        
        <div className="flex justify-center space-x-4">
          <Link 
            to="/login" 
            className="bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 font-medium"
          >
            Go to Login
          </Link>
          <Link 
            to="/register" 
            className="border border-rose-500 text-rose-500 px-6 py-3 rounded-lg hover:bg-rose-50 font-medium"
          >
            Go to Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
>>>>>>> 386977098c00456034c0843ce54344935016c99c
