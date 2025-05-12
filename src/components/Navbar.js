"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa"
import { useAuth } from "../context/AuthContext"
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { currentUser, logout } = useAuth()
  const [showUserMenu, setShowUserMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
   <Link to="/" className="navbar-logo" onClick={closeMenu}>
  <h1 className="logo-text">
   <span className=".logo-text"> Diamond </span> <span className="salon-text">Salon</span>
  </h1>
</Link>



        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/booking"
              className={`nav-link ${location.pathname === "/booking" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Booking
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          {currentUser ? (
            <li className="nav-item user-dropdown">
              <button className="user-menu-button" onClick={toggleUserMenu}>
                <FaUserCircle className="user-icon" />
                <span className="user-name">{currentUser.name || "Account"}</span>
              </button>
              {showUserMenu && (
                <div className="user-dropdown-menu">
                  <Link
                    to="/dashboard"
                    className={`dropdown-item ${location.pathname === "/dashboard" ? "active" : ""}`}
                    onClick={() => {
                      closeMenu();
                      setShowUserMenu(false);
                    }}
                  >
                    My Account
                  </Link>
                  <button
                    className="dropdown-item logout-btn"
                    onClick={() => {
                      logout();
                      closeMenu();
                      setShowUserMenu(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li className="nav-item">
              <Link
                to="/login"
                className={`nav-link login-btn ${location.pathname === "/login" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
