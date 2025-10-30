<<<<<<< HEAD
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      console.log('Sending login data to backend:', formData)
      
      const response = await api.post('/login', {
        email: formData.email,
        password: formData.password
      })
      
      console.log('Backend response:', response.data)
      setMessage(`Success: ${response.data.message}`)
      
      setFormData({
        email: '',
        password: ''
      })
      
    } catch (error) {
      console.error('Login error:', error)
      
      if (error.response) {
        setMessage(`Error: ${error.response.data.message || 'Login failed'}`)
      } else if (error.request) {
        setMessage('Error: Cannot connect to backend server. Make sure it is running on port 4000.')
      } else {
        setMessage(`Error: ${error.message}`)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Login to Your Account
        </h2>
        
        {message && (
          <div className={`p-3 rounded-lg mb-4 ${
            message.includes('Success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="h-4 w-4 text-rose-500 focus:ring-rose-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-rose-500 hover:text-rose-600 font-medium">
            Register here
          </Link>
        </p>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Current Form Data:
          </h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p>Email: {formData.email}</p>
            <p>Password: {formData.password}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

=======
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Login Data:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Login to Your Account
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="h-4 w-4 text-rose-500 focus:ring-rose-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 font-medium"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-rose-500 hover:text-rose-600 font-medium">
            Register here
          </Link>
        </p>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Form Data:
          </h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p>Email: {formData.email}</p>
            <p>Password: {formData.password}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

>>>>>>> 386977098c00456034c0843ce54344935016c99c
export default LoginPage