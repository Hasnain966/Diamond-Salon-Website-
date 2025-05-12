"use client"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaCheck } from "react-icons/fa"
import { useAuth } from "../context/AuthContext"
import "./Register.css"

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate()
  const { register, currentUser } = useAuth()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [passwordStrength, setPasswordStrength] = useState(0)

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

    // Check password strength
    if (name === "password") {
      checkPasswordStrength(value)
    }
  }

  const checkPasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) strength += 1
    if (/[A-Z]/.test(password)) strength += 1
    if (/[0-9]/.test(password)) strength += 1
    if (/[^A-Za-z0-9]/.test(password)) strength += 1
    setPasswordStrength(strength)
  }

  const getStrengthText = () => {
    switch (passwordStrength) {
      case 0:
        return "Weak"
      case 1:
        return "Fair"
      case 2:
        return "Good"
      case 3:
        return "Strong"
      case 4:
        return "Very Strong"
      default:
        return ""
    }
  }

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 0:
        return "#e53935"
      case 1:
        return "#ff9800"
      case 2:
        return "#fdd835"
      case 3:
        return "#43a047"
      case 4:
        return "#2e7d32"
      default:
        return "#ddd"
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return false
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long")
      return false
    }

    if (!formData.agreeTerms) {
      setError("You must agree to the Terms and Conditions")
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!validateForm()) return

    setIsLoading(true)

    try {
      await register(formData.name, formData.email, formData.password)
      navigate("/dashboard")
    } catch (error) {
      setError("Failed to create an account. Please try again.")
      setIsLoading(false)
    }
  }

  const handleSocialRegister = (provider) => {
    setIsLoading(true)

    // Simulate social registration
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
      className="register-page"
    >
      <div className="register-container">
        <div className="register-content">
          <motion.div
            className="register-form-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="register-header">
              <h1>Create an Account</h1>
              <p>Join Diamond Salon for exclusive benefits</p>
            </div>

            {error && <div className="register-error">{error}</div>}

            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

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
                <label htmlFor="phone">Phone Number</label>
                <div className="input-with-icon">
                  <FaPhone className="input-icon" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
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
                    placeholder="Create a password"
                    required
                  />
                  <button type="button" className="password-toggle" onClick={togglePasswordVisibility} tabIndex="-1">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {formData.password && (
                  <div className="password-strength">
                    <div className="strength-meter">
                      <div
                        className="strength-meter-fill"
                        style={{
                          width: `${(passwordStrength / 4) * 100}%`,
                          backgroundColor: getStrengthColor(),
                        }}
                      ></div>
                    </div>
                    <span className="strength-text" style={{ color: getStrengthColor() }}>
                      {getStrengthText()}
                    </span>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-with-icon">
                  <FaLock className="input-icon" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={toggleConfirmPasswordVisibility}
                    tabIndex="-1"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="form-group terms-checkbox">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="agreeTerms">
                  I agree to the{" "}
                  <Link to="/terms" className="terms-link">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="terms-link">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button type="submit" className="btn btn-primary register-btn" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="social-register">
              <p>Or sign up with</p>
              <div className="social-buttons">
                <button
                  type="button"
                  className="social-btn google"
                  onClick={() => handleSocialRegister("Google")}
                  disabled={isLoading}
                >
                  <FaGoogle />
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  className="social-btn facebook"
                  onClick={() => handleSocialRegister("Facebook")}
                  disabled={isLoading}
                >
                  <FaFacebook />
                  <span>Facebook</span>
                </button>
              </div>
            </div>

            <div className="register-footer">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="login-link">
                  Sign In
                </Link>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="register-benefits"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="benefits-content">
              <h2>Member Benefits</h2>
              <p>Join Diamond Salon today and enjoy these exclusive benefits:</p>

              <ul className="benefits-list">
                <li>
                  <FaCheck className="benefit-icon" />
                  <span>Priority booking for appointments</span>
                </li>
                <li>
                  <FaCheck className="benefit-icon" />
                  <span>Special member-only discounts</span>
                </li>
                <li>
                  <FaCheck className="benefit-icon" />
                  <span>Birthday treats and gifts</span>
                </li>
                <li>
                  <FaCheck className="benefit-icon" />
                  <span>Loyalty points on every service</span>
                </li>
                <li>
                  <FaCheck className="benefit-icon" />
                  <span>Early access to new services</span>
                </li>
                <li>
                  <FaCheck className="benefit-icon" />
                  <span>Personalized beauty recommendations</span>
                </li>
              </ul>

              <div className="testimonial">
                <p>
                  "Becoming a member at Diamond Salon was the best decision I made for my beauty routine. The exclusive
                  offers and personalized service are unmatched!"
                </p>
                <div className="testimonial-author">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Testimonial Author"
                  />
                  <span>Sarah Johnson</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Register
