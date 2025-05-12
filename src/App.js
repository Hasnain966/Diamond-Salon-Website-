"use client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Booking from "./pages/Booking"
import Contact from "./pages/Contact.js"
import Login from "./pages/Login.js"
import Register from "./pages/Register.js"
import UserDashboard from "./pages/UserDashboard.js"
import { AuthProvider } from "./context/AuthContext"
import "./App.css"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<UserDashboard />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
