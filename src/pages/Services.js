"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaCut, FaSpa, FaHandSparkles, FaSmileBeam, FaSearch } from "react-icons/fa"
import "./Services.css"

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "all", name: "All Services", icon: <FaSearch /> },
    { id: "hair", name: "Hair Services", icon: <FaCut /> },
    { id: "spa", name: "Spa & Facial", icon: <FaSpa /> },
    { id: "nails", name: "Nail Care", icon: <FaHandSparkles /> },
    { id: "makeup", name: "Makeup", icon: <FaSmileBeam /> },
  ]

  const services = [
    {
      id: 1,
      name: "Women's Haircut",
      category: "hair",
      price: "$60 - $120",
      duration: "60 min",
      description:
        "Precision cut tailored to your face shape and hair texture, includes consultation, shampoo, and style.",
      discount: "20% off for new clients",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Men's Haircut",
      category: "hair",
      price: "$40 - $80",
      duration: "45 min",
      description: "Classic or modern cut with attention to detail, includes consultation, shampoo, and style.",
      discount: "",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Hair Coloring",
      category: "hair",
      price: "$90 - $200",
      duration: "120 min",
      description: "Full color service using premium products for vibrant, long-lasting results.",
      discount: "15% off this month",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Highlights",
      category: "hair",
      price: "$120 - $250",
      duration: "150 min",
      description: "Dimensional highlights to add depth and brightness to your hair color.",
      discount: "",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Balayage",
      category: "hair",
      price: "$150 - $300",
      duration: "180 min",
      description: "Hand-painted highlights for a natural, sun-kissed look with seamless grow-out.",
      discount: "",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Keratin Treatment",
      category: "hair",
      price: "$200 - $350",
      duration: "180 min",
      description: "Smoothing treatment that reduces frizz and adds shine for up to 3 months.",
      discount: "10% off for returning clients",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Classic Facial",
      category: "spa",
      price: "$80 - $120",
      duration: "60 min",
      description: "Deep cleansing facial customized for your skin type, includes extraction and mask.",
      discount: "",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Anti-Aging Facial",
      category: "spa",
      price: "$120 - $180",
      duration: "75 min",
      description: "Advanced treatment targeting fine lines and wrinkles with premium anti-aging products.",
      discount: "",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Hydrating Body Wrap",
      category: "spa",
      price: "$100 - $150",
      duration: "90 min",
      description: "Nourishing body treatment that hydrates and rejuvenates dry skin.",
      discount: "20% off this week",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "Hot Stone Massage",
      category: "spa",
      price: "$110 - $170",
      duration: "90 min",
      description: "Therapeutic massage using heated stones to relieve tension and promote relaxation.",
      discount: "",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      name: "Classic Manicure",
      category: "nails",
      price: "$35 - $50",
      duration: "45 min",
      description: "Nail shaping, cuticle care, hand massage, and polish application.",
      discount: "",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 12,
      name: "Gel Manicure",
      category: "nails",
      price: "$50 - $70",
      duration: "60 min",
      description: "Long-lasting gel polish that stays chip-free for up to two weeks.",
      discount: "15% off with pedicure",
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 13,
      name: "Luxury Pedicure",
      category: "nails",
      price: "$65 - $90",
      duration: "75 min",
      description: "Deluxe foot treatment with extended massage, exfoliation, and premium products.",
      discount: "",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 14,
      name: "Nail Art",
      category: "nails",
      price: "$10 - $50",
      duration: "30-60 min",
      description: "Custom nail designs from simple accents to elaborate artwork.",
      discount: "",
      image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 15,
      name: "Natural Makeup",
      category: "makeup",
      price: "$60 - $90",
      duration: "45 min",
      description: "Subtle, everyday makeup that enhances your natural features.",
      discount: "",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 16,
      name: "Special Occasion Makeup",
      category: "makeup",
      price: "$90 - $150",
      duration: "60 min",
      description: "Glamorous makeup for weddings, parties, and other special events.",
      discount: "10% off for bridal parties",
      image: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 17,
      name: "Makeup Lesson",
      category: "makeup",
      price: "$120 - $180",
      duration: "90 min",
      description: "One-on-one tutorial to teach you techniques for your daily makeup routine.",
      discount: "",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 18,
      name: "Lash Extensions",
      category: "makeup",
      price: "$150 - $250",
      duration: "120 min",
      description: "Full set of individual eyelash extensions for a dramatic, mascara-free look.",
      discount: "15% off for first-time clients",
      image: "https://images.unsplash.com/photo-1583001809873-a128495da465?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  const filteredServices = services.filter((service) => {
    const matchesCategory = activeCategory === "all" || service.category === activeCategory
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="container services-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1>Our Services</h1>
            <p>Discover our range of premium beauty and wellness services</p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          {/* Search and Filter */}
          <div className="services-filter">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="category-filter">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Services List */}
          <motion.div className="services-list" variants={staggerContainer} initial="initial" animate="animate">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <motion.div key={service.id} className="service-item" variants={fadeIn}>
                  <div className="service-image">
                    <img src={service.image || "/placeholder.svg"} alt={service.name} />
                    {service.discount && <div className="service-discount">{service.discount}</div>}
                  </div>
                  <div className="service-details">
                    <h3>{service.name}</h3>
                    <div className="service-meta">
                      <span className="service-price">{service.price}</span>
                      <span className="service-duration">{service.duration}</span>
                    </div>
                    <p className="service-description">{service.description}</p>
                    <Link to="/booking" className="btn btn-accent">
                      Book Now
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="no-services">
                <h3>No services found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="section special-offers">
        <div className="container">
          <div className="section-title">
            <h2>Special Offers</h2>
            <p>Take advantage of our limited-time promotions</p>
          </div>
          <div className="offers-container">
            <motion.div
              className="offer-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="offer-content">
                <h3>New Client Special</h3>
                <p className="offer-discount">20% OFF</p>
                <p>Your first service with us</p>
                <Link to="/booking" className="btn btn-accent">
                  Book Now
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="offer-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="offer-content">
                <h3>Package Deal</h3>
                <p className="offer-discount">15% OFF</p>
                <p>When you book any 3 services</p>
                <Link to="/booking" className="btn btn-accent">
                  Book Now
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="offer-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="offer-content">
                <h3>Referral Reward</h3>
                <p className="offer-discount">$25 Credit</p>
                <p>When you refer a friend</p>
                <Link to="/contact" className="btn btn-accent">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section services-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Experience Our Services?</h2>
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

export default Services
