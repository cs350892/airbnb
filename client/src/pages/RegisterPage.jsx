import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'

function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords don't match!")
      return
    }

    setLoading(true)
    setMessage('')

    try {
      console.log('Sending registration data to backend:', formData)
      
      const response = await api.post('/register', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      })
      
      console.log('Backend response:', response.data)
      setMessage(`Success: ${response.data.message}`)
      
      // Reset form on success
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
      
    } catch (error) {
      console.error('Registration error:', error)
      
      if (error.response) {
        setMessage(`Error: ${error.response.data.message || 'Registration failed'}`)
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
          Create New Account
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
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>

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
              placeholder="Create a password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Repeat your password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              required
              className="h-4 w-4 text-rose-500 focus:ring-rose-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              I agree to the Terms and Conditions
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-rose-500 hover:text-rose-600 font-medium">
            Login here
          </Link>
        </p>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Current Form Data:
          </h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p>Full Name: {formData.fullName}</p>
            <p>Email: {formData.email}</p>
            <p>Password: {formData.password}</p>
            <p>Confirm Password: {formData.confirmPassword}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage