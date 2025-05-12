"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaSpa, FaCut, FaHandSparkles, FaSmileBeam } from "react-icons/fa"
import "./Home.css"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="luxury-heading">Experience Luxury at Diamond Salon</h1>
            <p>Where beauty meets excellence. Discover our premium services designed to enhance your natural beauty.</p>
            <div className="hero-buttons">
              <Link to="/booking" className="btn btn-accent">
                Book Appointment
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section services-preview">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <motion.div
            className="grid grid-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="service-card" variants={fadeIn}>
              <div className="service-icon">
                <FaCut />
              </div>
              <h3>Hair Styling</h3>
              <p>Expert cuts, styling, and treatments for all hair types.</p>
              <Link to="/services" className="service-link">
                Learn More
              </Link>
            </motion.div>

            <motion.div className="service-card" variants={fadeIn}>
              <div className="service-icon">
                <FaSpa />
              </div>
              <h3>Spa & Facial</h3>
              <p>Rejuvenating treatments for glowing, healthy skin.</p>
              <Link to="/services" className="service-link">
                Learn More
              </Link>
            </motion.div>

            <motion.div className="service-card" variants={fadeIn}>
              <div className="service-icon">
                <FaHandSparkles />
              </div>
              <h3>Nail Care</h3>
              <p>Manicures and pedicures with premium products.</p>
              <Link to="/services" className="service-link">
                Learn More
              </Link>
            </motion.div>

            <motion.div className="service-card" variants={fadeIn}>
              <div className="service-icon">
                <FaSmileBeam />
              </div>
              <h3>Makeup</h3>
              <p>Professional makeup for any occasion or event.</p>
              <Link to="/services" className="service-link">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section about-preview">
        <div className="container">
          <div className="grid grid-2">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Salon Interior"
              />
            </motion.div>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Welcome to Diamond Salon</h2>
              <p>
                At Diamond Salon, we believe that beauty is an expression of individuality. Our team of skilled
                professionals is dedicated to enhancing your natural beauty and helping you feel confident in your own
                skin.
              </p>
              <p>
                With over 10 years of experience in the beauty industry, we pride ourselves on providing exceptional
                service in a luxurious and welcoming environment.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
          </div>
          <div className="testimonial-slider">
            <motion.div
              className="testimonial-container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>
                    "The best salon experience I've ever had! The staff is professional and friendly, and my hair has
                    never looked better."
                  </p>
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-image">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Client"
                    />
                  </div>
                  <div className="testimonial-meta">
                    <h4>Sarah Johnson</h4>
                    <p>Regular Client</p>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <div className="testimonial-content">
                  <p>
                    "I've been coming to Diamond Salon for years, and I'm always impressed by their attention to detail
                    and commitment to excellence."
                  </p>
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-image">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Client"
                    />
                  </div>
                  <div className="testimonial-meta">
                    <h4>Michael Brown</h4>
                    <p>Loyal Customer</p>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <div className="testimonial-content">
                  <p>
                    "The spa treatments here are absolutely divine! I leave feeling refreshed and rejuvenated every
                    time."
                  </p>
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-image">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Client"
                    />
                  </div>
                  <div className="testimonial-meta">
                    <h4>Emily Davis</h4>
                    <p>Spa Enthusiast</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="section promotions">
        <div className="container">
          <motion.div
            className="promotion-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="promotion-content">
              <h2>Special Offer</h2>
              <h3>30% OFF</h3>
              <p>On all hair coloring services this month!</p>
              <Link to="/booking" className="btn btn-accent">
                Book Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Experience the Diamond Difference?</h2>
            <p>Book your appointment today and let our experts take care of you.</p>
            <Link to="/booking" className="btn btn-accent">
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
