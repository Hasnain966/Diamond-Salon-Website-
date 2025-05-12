"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { FaAward, FaUsers, FaSmile, FaCertificate } from "react-icons/fa"
import "./About.css"

const About = () => {
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
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1>About Diamond Salon</h1>
            <p>Discover our story, our team, and our commitment to excellence</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section our-story">
        <div className="container">
          <div className="grid grid-2">
            <motion.div
              className="story-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="section-title text-left">
                <h2>Our Story</h2>
              </div>
              <p>
                Diamond Salon was founded in 2010 with a simple yet powerful vision: to create a sanctuary where clients
                could experience the highest quality beauty services in an atmosphere of luxury and relaxation.
              </p>
              <p>
                What began as a small salon with just three stylists has grown into a premier beauty destination, known
                for its exceptional service, talented professionals, and commitment to using only the finest products.
              </p>
              <p>
                Over the years, we've had the privilege of helping thousands of clients look and feel their best for
                everyday life, special occasions, and everything in between. Our journey has been one of continuous
                growth and learning, always striving to stay at the forefront of beauty trends and techniques.
              </p>
            </motion.div>
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1470259078422-826894b933aa?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Salon History"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats">
        <div className="container">
          <motion.div
            className="grid grid-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="stat-item" variants={fadeIn}>
              <div className="stat-icon">
                <FaAward />
              </div>
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </motion.div>

            <motion.div className="stat-item" variants={fadeIn}>
              <div className="stat-icon">
                <FaUsers />
              </div>
              <h3>15+</h3>
              <p>Expert Stylists</p>
            </motion.div>

            <motion.div className="stat-item" variants={fadeIn}>
              <div className="stat-icon">
                <FaSmile />
              </div>
              <h3>5000+</h3>
              <p>Happy Clients</p>
            </motion.div>

            <motion.div className="stat-item" variants={fadeIn}>
              <div className="stat-icon">
                <FaCertificate />
              </div>
              <h3>20+</h3>
              <p>Awards Won</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section our-values">
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
          </div>
          <motion.div
            className="grid grid-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="value-card" variants={fadeIn}>
              <h3>Excellence</h3>
              <p>
                We are committed to delivering exceptional service and results that exceed expectations. Our team
                continuously trains and develops to stay at the cutting edge of beauty techniques.
              </p>
            </motion.div>

            <motion.div className="value-card" variants={fadeIn}>
              <h3>Integrity</h3>
              <p>
                We believe in honesty, transparency, and ethical practices in all aspects of our business. We only
                recommend services and products that truly benefit our clients.
              </p>
            </motion.div>

            <motion.div className="value-card" variants={fadeIn}>
              <h3>Creativity</h3>
              <p>
                We embrace innovation and artistic expression, encouraging our team to think outside the box and create
                unique, personalized beauty solutions for each client.
              </p>
            </motion.div>

            <motion.div className="value-card" variants={fadeIn}>
              <h3>Inclusivity</h3>
              <p>
                We celebrate diversity and create a welcoming environment where everyone feels valued and respected,
                regardless of background, age, or style preferences.
              </p>
            </motion.div>

            <motion.div className="value-card" variants={fadeIn}>
              <h3>Sustainability</h3>
              <p>
                We are committed to environmentally responsible practices, using eco-friendly products and implementing
                sustainable operations wherever possible.
              </p>
            </motion.div>

            <motion.div className="value-card" variants={fadeIn}>
              <h3>Client-Centered</h3>
              <p>
                Our clients are at the heart of everything we do. We listen carefully to their needs and desires,
                ensuring each visit is personalized and satisfying.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section our-team">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <p>Our talented professionals are passionate about beauty and dedicated to your satisfaction</p>
          </div>
          <motion.div
            className="grid grid-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="team-member" variants={fadeIn}>
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Team Member"
                />
              </div>
              <div className="member-info">
                <h3>Emma Wilson</h3>
                <p className="member-role">Founder & Creative Director</p>
                <p className="member-bio">
                  With over 15 years of experience in the beauty industry, Emma's vision and passion have been the
                  driving force behind Diamond Salon's success.
                </p>
              </div>
            </motion.div>

            <motion.div className="team-member" variants={fadeIn}>
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Team Member"
                />
              </div>
              <div className="member-info">
                <h3>James Rodriguez</h3>
                <p className="member-role">Master Stylist</p>
                <p className="member-bio">
                  James specializes in cutting-edge hair designs and color techniques. His work has been featured in
                  several fashion magazines.
                </p>
              </div>
            </motion.div>

            <motion.div className="team-member" variants={fadeIn}>
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Team Member"
                />
              </div>
              <div className="member-info">
                <h3>Sophia Chen</h3>
                <p className="member-role">Senior Colorist</p>
                <p className="member-bio">
                  Sophia is known for her exceptional color transformations and ability to create personalized looks
                  that enhance each client's unique features.
                </p>
              </div>
            </motion.div>

            <motion.div className="team-member" variants={fadeIn}>
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Team Member"
                />
              </div>
              <div className="member-info">
                <h3>David Thompson</h3>
                <p className="member-role">Spa Specialist</p>
                <p className="member-bio">
                  David's holistic approach to skincare and relaxation has made him one of our most requested spa
                  therapists.
                </p>
              </div>
            </motion.div>

            <motion.div className="team-member" variants={fadeIn}>
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Team Member"
                />
              </div>
              <div className="member-info">
                <h3>Olivia Parker</h3>
                <p className="member-role">Nail Artist</p>
                <p className="member-bio">
                  Olivia's creative nail designs and meticulous attention to detail have earned her a loyal following of
                  clients.
                </p>
              </div>
            </motion.div>

            <motion.div className="team-member" variants={fadeIn}>
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Team Member"
                />
              </div>
              <div className="member-info">
                <h3>Michael Lee</h3>
                <p className="member-role">Makeup Artist</p>
                <p className="member-bio">
                  Michael's expertise in makeup application ranges from subtle everyday looks to dramatic special
                  occasion transformations.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Salon Amenities Section */}
      <section className="section salon-amenities">
        <div className="container">
          <div className="section-title">
            <h2>Salon Amenities</h2>
            <p>Experience luxury and comfort with our premium facilities</p>
          </div>
          <div className="amenities-gallery">
            <motion.div
              className="amenity-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Salon Interior"
              />
              <div className="amenity-overlay">
                <h3>Luxurious Interior</h3>
                <p>Designed for comfort and style</p>
              </div>
            </motion.div>

            <motion.div
              className="amenity-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="VIP Treatment Rooms"
              />
              <div className="amenity-overlay">
                <h3>Private Treatment Rooms</h3>
                <p>For a personalized experience</p>
              </div>
            </motion.div>

            <motion.div
              className="amenity-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Relaxation Area"
              />
              <div className="amenity-overlay">
                <h3>Relaxation Lounge</h3>
                <p>Unwind before or after your service</p>
              </div>
            </motion.div>

            <motion.div
              className="amenity-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Premium Products"
              />
              <div className="amenity-overlay">
                <h3>Premium Products</h3>
                <p>Only the finest beauty brands</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section awards">
        <div className="container">
          <div className="section-title">
            <h2>Our Achievements</h2>
            <p>Recognition for our commitment to excellence</p>
          </div>
          <motion.div
            className="awards-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="award">
              <div className="award-year">2022</div>
              <div className="award-content">
                <h3>Best Luxury Salon</h3>
                <p>City Beauty Awards</p>
              </div>
            </div>

            <div className="award">
              <div className="award-year">2021</div>
              <div className="award-content">
                <h3>Excellence in Customer Service</h3>
                <p>National Salon Association</p>
              </div>
            </div>

            <div className="award">
              <div className="award-year">2020</div>
              <div className="award-content">
                <h3>Top Rated Spa Experience</h3>
                <p>Wellness Magazine</p>
              </div>
            </div>

            <div className="award">
              <div className="award-year">2019</div>
              <div className="award-content">
                <h3>Innovative Salon of the Year</h3>
                <p>Beauty Industry Recognition</p>
              </div>
            </div>

            <div className="award">
              <div className="award-year">2018</div>
              <div className="award-content">
                <h3>Best Hair Coloring Services</h3>
                <p>Regional Style Awards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
