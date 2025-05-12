"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Create the context
const AuthContext = createContext()

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext)
}

// Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check if user is logged in from localStorage on initial load
  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      setCurrentUser(JSON.parse(user))
    }
    setLoading(false)
  }, [])

  // Simulated login function
  const login = (email, password) => {
    // In a real app, this would make an API call to authenticate
    return new Promise((resolve, reject) => {
      // Simulate API call delay
      setTimeout(() => {
        // For demo purposes, accept any email/password
        if (email && password) {
          const user = {
            id: "1",
            name: email.split("@")[0],
            email: email,
            // Add other user properties as needed
          }

          setCurrentUser(user)
          localStorage.setItem("user", JSON.stringify(user))
          resolve(user)
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 1000)
    })
  }

  // Simulated register function
  const register = (name, email, password) => {
    // In a real app, this would make an API call to register
    return new Promise((resolve, reject) => {
      // Simulate API call delay
      setTimeout(() => {
        if (name && email && password) {
          const user = {
            id: "1",
            name: name,
            email: email,
            // Add other user properties as needed
          }

          setCurrentUser(user)
          localStorage.setItem("user", JSON.stringify(user))
          resolve(user)
        } else {
          reject(new Error("Invalid registration data"))
        }
      }, 1000)
    })
  }

  // Logout function
  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem("user")
  }

  const value = {
    currentUser,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
