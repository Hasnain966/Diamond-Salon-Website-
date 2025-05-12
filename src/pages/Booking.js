"use client"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCreditCard,
  FaMoneyBillWave,
  FaCheck,
} from "react-icons/fa"
import { useAuth } from "../context/AuthContext"
import "./Booking.css"

const Booking = () => {
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    name: currentUser ? currentUser.name : "",
    email: currentUser ? currentUser.email : "",
    phone: "",
    notes: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isLoading, setIsLoading] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)
  const [bookingReference, setBookingReference] = useState("")
  const [availableTimes, setAvailableTimes] = useState([])

  // Services data
  const services = [
    { id: "haircut", name: "Haircut & Styling", price: "$60 - $120" },
    { id: "coloring", name: "Hair Coloring", price: "$90 - $200" },
    { id: "facial", name: "Facial Treatment", price: "$80 - $150" },
    { id: "manicure", name: "Manicure & Pedicure", price: "$50 - $100" },
    { id: "makeup", name: "Makeup Service", price: "$60 - $150" },
    { id: "massage", name: "Massage Therapy", price: "$80 - $150" },
  ]

  // Generate available time slots based on selected date
  useEffect(() => {
    if (selectedDate) {
      // In a real app, this would come from an API based on actual availability
      const times = []
      const startHour = 9 // 9 AM
      const endHour = 18 // 6 PM

      for (let hour = startHour; hour < endHour; hour++) {
        times.push(`${hour}:00`)
        times.push(`${hour}:30`)
      }

      // Randomly remove some times to simulate booked slots
      const availableTimes = times.filter(() => Math.random() > 0.3)
      setAvailableTimes(availableTimes)
    }
  }, [selectedDate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleNextStep = () => {
    if (step === 1 && !selectedService) {
      alert("Please select a service")
      return
    }

    if (step === 2 && (!selectedDate || !selectedTime)) {
      alert("Please select both date and time")
      return
    }

    if (step === 3 && (!formData.name || !formData.email || !formData.phone)) {
      alert("Please fill in all required fields")
      return
    }

    if (step < 4) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Generate a random booking reference
      const reference = `BK${Math.floor(100000 + Math.random() * 900000)}`
      setBookingReference(reference)
      setBookingComplete(true)
      setIsLoading(false)
    }, 2000)
  }

  const getServiceById = (id) => {
    return services.find((service) => service.id === id)
  }

  const formatDate = (date) => {
    if (!date) return ""
    return date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="booking-page"
    >
      {/* Hero Section */}
      <section className="booking-hero">
        <div className="booking-hero-overlay"></div>
        <div className="container booking-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1>Book Your Appointment</h1>
            <p>Schedule your visit to Diamond Salon in just a few simple steps</p>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section booking-section">
        <div className="container">
          {!bookingComplete ? (
            <div className="booking-container">
              {/* Progress Steps */}
              <div className="booking-progress">
                <div className={`progress-step ${step >= 1 ? "active" : ""}`}>
                  <div className="step-number">1</div>
                  <div className="step-text">Select Service</div>
                </div>
                <div className="progress-line"></div>
                <div className={`progress-step ${step >= 2 ? "active" : ""}`}>
                  <div className="step-number">2</div>
                  <div className="step-text">Choose Date & Time</div>
                </div>
                <div className="progress-line"></div>
                <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
                  <div className="step-number">3</div>
                  <div className="step-text">Your Details</div>
                </div>
                <div className="progress-line"></div>
                <div className={`progress-step ${step >= 4 ? "active" : ""}`}>
                  <div className="step-number">4</div>
                  <div className="step-text">Payment</div>
                </div>
              </div>

              {/* Step 1: Select Service */}
              {step === 1 && (
                <motion.div
                  className="booking-step"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2>Select a Service</h2>
                  <p>Choose from our range of premium services</p>

                  <div className="services-grid">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`service-card ${selectedService === service.id ? "selected" : ""}`}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <div className="service-card-content">
                          <h3>{service.name}</h3>
                          <p className="service-price">{service.price}</p>
                          {selectedService === service.id && (
                            <div className="selected-indicator">
                              <FaCheck />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="booking-actions">
                    <button className="btn btn-primary" onClick={handleNextStep}>
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Choose Date & Time */}
              {step === 2 && (
                <motion.div
                  className="booking-step"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2>Choose Date & Time</h2>
                  <p>Select your preferred appointment date and time</p>

                  <div className="date-time-container">
                    <div className="date-picker-container">
                      <label>Select Date</label>
                      <div className="date-picker-wrapper">
                        <FaCalendarAlt className="date-icon" />
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          minDate={new Date()}
                          placeholderText="Click to select a date"
                          className="date-picker"
                        />
                      </div>
                    </div>

                    <div className="time-picker-container">
                      <label>Select Time</label>
                      <div className="time-slots">
                        {selectedDate ? (
                          availableTimes.length > 0 ? (
                            availableTimes.map((time, index) => (
                              <button
                                key={index}
                                className={`time-slot ${selectedTime === time ? "selected" : ""}`}
                                onClick={() => setSelectedTime(time)}
                              >
                                <FaClock className="time-icon" />
                                {time}
                              </button>
                            ))
                          ) : (
                            <p className="no-times">No available times for this date. Please select another date.</p>
                          )
                        ) : (
                          <p className="select-date-first">Please select a date first</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="booking-actions">
                    <button className="btn btn-secondary" onClick={handlePrevStep}>
                      Back
                    </button>
                    <button className="btn btn-primary" onClick={handleNextStep}>
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Your Details */}
              {step === 3 && (
                <motion.div
                  className="booking-step"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2>Your Details</h2>
                  <p>Please provide your contact information</p>

                  <form className="booking-form">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <div className="input-with-icon">
                        <FaUser className="input-icon" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <div className="input-with-icon">
                        <FaEnvelope className="input-icon" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <div className="input-with-icon">
                        <FaPhone className="input-icon" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="notes">Special Requests (Optional)</label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Any special requests or notes for your appointment"
                        rows="4"
                      ></textarea>
                    </div>
                  </form>

                  <div className="booking-actions">
                    <button className="btn btn-secondary" onClick={handlePrevStep}>
                      Back
                    </button>
                    <button className="btn btn-primary" onClick={handleNextStep}>
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Payment */}
              {step === 4 && (
                <motion.div
                  className="booking-step"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2>Payment Method</h2>
                  <p>Choose how you'd like to pay for your service</p>

                  <div className="booking-summary">
                    <h3>Booking Summary</h3>
                    <div className="summary-item">
                      <span>Service:</span>
                      <span>{getServiceById(selectedService)?.name}</span>
                    </div>
                    <div className="summary-item">
                      <span>Date:</span>
                      <span>{formatDate(selectedDate)}</span>
                    </div>
                    <div className="summary-item">
                      <span>Time:</span>
                      <span>{selectedTime}</span>
                    </div>
                    <div className="summary-item">
                      <span>Price Range:</span>
                      <span>{getServiceById(selectedService)?.price}</span>
                    </div>
                  </div>

                  <div className="payment-options">
                    <h3>Select Payment Method</h3>
                    <div className="payment-methods">
                      <div
                        className={`payment-method ${paymentMethod === "card" ? "selected" : ""}`}
                        onClick={() => setPaymentMethod("card")}
                      >
                        <FaCreditCard className="payment-icon" />
                        <div className="payment-text">
                          <h4>Credit/Debit Card</h4>
                          <p>Pay now with your card</p>
                        </div>
                        {paymentMethod === "card" && (
                          <div className="selected-indicator">
                            <FaCheck />
                          </div>
                        )}
                      </div>

                      <div
                        className={`payment-method ${paymentMethod === "cash" ? "selected" : ""}`}
                        onClick={() => setPaymentMethod("cash")}
                      >
                        <FaMoneyBillWave className="payment-icon" />
                        <div className="payment-text">
                          <h4>Pay at Salon</h4>
                          <p>Pay with cash or card when you visit</p>
                        </div>
                        {paymentMethod === "cash" && (
                          <div className="selected-indicator">
                            <FaCheck />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="card-payment-form">
                      <p className="payment-note">
                        Note: This is a simulated payment form. In a real application, this would be integrated with a
                        secure payment processor.
                      </p>
                      <div className="form-group">
                        <label>Card Number</label>
                        <input type="text" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Expiry Date</label>
                          <input type="text" placeholder="MM/YY" />
                        </div>
                        <div className="form-group">
                          <label>CVC</label>
                          <input type="text" placeholder="123" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Name on Card</label>
                        <input type="text" placeholder="John Doe" />
                      </div>
                    </div>
                  )}

                  <div className="booking-actions">
                    <button className="btn btn-secondary" onClick={handlePrevStep}>
                      Back
                    </button>
                    <button className="btn btn-primary" onClick={handleSubmit} disabled={isLoading}>
                      {isLoading ? "Processing..." : "Confirm Booking"}
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            <motion.div
              className="booking-success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="success-icon">
                <FaCheck />
              </div>
              <h2>Booking Confirmed!</h2>
              <p>Your appointment has been successfully booked.</p>

              <div className="booking-details">
                <h3>Booking Details</h3>
                <div className="detail-item">
                  <span>Booking Reference:</span>
                  <span>{bookingReference}</span>
                </div>
                <div className="detail-item">
                  <span>Service:</span>
                  <span>{getServiceById(selectedService)?.name}</span>
                </div>
                <div className="detail-item">
                  <span>Date:</span>
                  <span>{formatDate(selectedDate)}</span>
                </div>
                <div className="detail-item">
                  <span>Time:</span>
                  <span>{selectedTime}</span>
                </div>
                <div className="detail-item">
                  <span>Payment Method:</span>
                  <span>{paymentMethod === "card" ? "Credit/Debit Card" : "Pay at Salon"}</span>
                </div>
              </div>

              <p className="confirmation-message">
                A confirmation email has been sent to {formData.email}. Please arrive 10 minutes before your appointment
                time.
              </p>

              <div className="success-actions">
                <Link to="/" className="btn btn-secondary">
                  Return to Home
                </Link>
                {!currentUser && (
                  <Link to="/register" className="btn btn-primary">
                    Create an Account
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="section booking-info">
        <div className="container">
          <div className="section-title">
            <h2>Booking Information</h2>
          </div>
          <div className="grid grid-3">
            <div className="info-card">
              <h3>Cancellation Policy</h3>
              <p>
                We understand that plans change. You can reschedule or cancel your appointment up to 24 hours before
                your scheduled time without any charge. Late cancellations or no-shows may incur a fee of 50% of the
                service price.
              </p>
            </div>

            <div className="info-card">
              <h3>What to Expect</h3>
              <p>
                Please arrive 10 minutes before your appointment time to check in. For new clients, we recommend
                arriving 15 minutes early to complete any necessary paperwork and discuss your preferences with your
                stylist.
              </p>
            </div>

            <div className="info-card">
              <h3>Special Requests</h3>
              <p>
                If you have any special requirements or preferences, please let us know in the notes section when
                booking or contact us directly. We'll do our best to accommodate your needs and ensure your visit is
                perfect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Booking
