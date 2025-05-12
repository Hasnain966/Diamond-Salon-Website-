import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-title">Diamond Salon</h3>
            <p>
              Experience luxury hair and beauty services at Diamond Salon. Our team of experts is dedicated to making
              you look and feel your best.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-section links">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/booking">Book Appointment</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section services">
            <h3 className="footer-title">Our Services</h3>
            <ul>
              <li>
                <Link to="/services">Hair Styling</Link>
              </li>
              <li>
                <Link to="/services">Hair Coloring</Link>
              </li>
              <li>
                <Link to="/services">Facial Treatments</Link>
              </li>
              <li>
                <Link to="/services">Manicure & Pedicure</Link>
              </li>
              <li>
                <Link to="/services">Makeup Services</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-info">
              <p>
                <FaMapMarkerAlt className="contact-icon" />
                123 Beauty Street, Fashion City, FC 12345
              </p>
              <p>
                <FaPhone className="contact-icon" />
                (+92) 3112278199
              </p>
              <p>
                <FaEnvelope className="contact-icon" />
                diamond.salon@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Diamond Salon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
