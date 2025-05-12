"use client"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa"
import { useAuth } from "../context/AuthContext"
import "./Login.css"

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate()
  const { login, currentUser } = useAuth()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Redirect if already logged in
  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard")
    }
  }, [currentUser, navigate])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await login(formData.email, formData.password)
      navigate("/dashboard")
    } catch (error) {
      setError("Invalid email or password. Please try again.")
      setIsLoading(false)
    }
  }

  const handleSocialLogin = (provider) => {
    setIsLoading(true)
    
    // Simulate social login
    setTimeout(() => {
      const user = {
        id: "social-1",
        name: provider === "Google" ? "Google User" : "Facebook User",
        email: provider === "Google" ? "user@gmail.com" : "user@facebook.com",
      }
      
      localStorage.setItem("user", JSON.stringify(user))
      window.location.reload() // This will trigger the useEffect to redirect
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="login-page"
    >
      <div className="login-container">
        <div className="login-content">
          <motion.div
            className="login-form-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="login-header">
              <h1>Welcome Back</h1>
              <p>Sign in to access your account</p>
            </div>

            {error && <div className="login-error">{error}</div>}

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-with-icon">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-with-icon">
                  <FaLock className="input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                  <button type="button" className="password-toggle" onClick={togglePasswordVisibility} tabIndex="-1">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="btn btn-primary login-btn" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <div className="social-login">
              <p>Or sign in with</p>
              <div className="social-buttons">
                <button 
                  type="button" 
                  className="social-btn google" 
                  onClick={() => handleSocialLogin("Google")}
                  disabled={isLoading}
                >
                  <FaGoogle />
                  <span>Google</span>
                </button>
                <button 
                  type="button" 
                  className="social-btn facebook" 
                  onClick={() => handleSocialLogin("Facebook")}
                  disabled={isLoading}
                >
                  <FaFacebook />
                  <span>Facebook</span>
                </button>
              </div>
            </div>

            <div className="login-footer">
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="register-link">
                  Sign Up
                </Link>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="login-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Salon Interior" 
            />
            <div className="login-image-overlay">
              <div className="login-image-content">
                <h2>Experience Luxury</h2>
                <p>Join Diamond Salon for premium beauty services and exclusive member benefits.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Login
