<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'

function IndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Airbnb
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Find your perfect place to stay
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition duration-200"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="border border-rose-500 text-rose-500 px-6 py-3 rounded-lg hover:bg-rose-50 transition duration-200"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

=======
import React from 'react'
import { Link } from 'react-router-dom'

function IndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Airbnb
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Find your perfect place to stay
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition duration-200"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="border border-rose-500 text-rose-500 px-6 py-3 rounded-lg hover:bg-rose-50 transition duration-200"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

>>>>>>> 386977098c00456034c0843ce54344935016c99c
export default IndexPage