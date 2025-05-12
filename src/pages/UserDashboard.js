"use client"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {
  FaCalendarAlt,
  FaHistory,
  FaGift,
  FaUser,
  FaCreditCard,
  FaBell,
  FaSignOutAlt,
  FaEdit,
  FaTrash,
  FaStar,
} from "react-icons/fa"
import { useAuth } from "../context/AuthContext"
import "./UserDashboard.css"

const UserDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate()
  const { currentUser, logout } = useAuth()
  const [activeTab, setActiveTab] = useState("appointments")

  // Redirect if not logged in
  useEffect(() => {
    if (!currentUser) {
      navigate("/login")
    }
  }, [currentUser, navigate])

  // Sample data for dashboard
  const upcomingAppointments = [
    {
      id: 1,
      service: "Haircut & Styling",
      stylist: "Emma Wilson",
      date: "2023-06-15",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      service: "Facial Treatment",
      stylist: "David Thompson",
      date: "2023-06-28",
      time: "2:30 PM",
      status: "Pending",
    },
  ]

  const appointmentHistory = [
    {
      id: 101,
      service: "Hair Coloring",
      stylist: "James Rodriguez",
      date: "2023-05-20",
      time: "11:30 AM",
      status: "Completed",
      reviewed: true,
      rating: 5,
    },
    {
      id: 102,
      service: "Manicure & Pedicure",
      stylist: "Olivia Parker",
      date: "2023-04-12",
      time: "3:00 PM",
      status: "Completed",
      reviewed: false,
    },
    {
      id: 103,
      service: "Haircut & Styling",
      stylist: "Emma Wilson",
      date: "2023-03-05",
      time: "1:00 PM",
      status: "Completed",
      reviewed: true,
      rating: 4,
    },
  ]

  const specialOffers = [
    {
      id: 201,
      title: "Birthday Special",
      description: "Get a free facial treatment during your birthday month!",
      validUntil: "Your next birthday",
      code: "BIRTHDAY2023",
    },
    {
      id: 202,
      title: "Loyalty Reward",
      description: "30% off on your next hair coloring service.",
      validUntil: "2023-07-31",
      code: "LOYAL30",
    },
    {
      id: 203,
      title: "Refer a Friend",
      description: "Refer a friend and both get $20 off your next service.",
      validUntil: "Ongoing",
      code: "REFER20",
    },
  ]

  const [profileData, setProfileData] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    phone: "",
    address: "",
    birthdate: "",
    preferences: "",
  })

  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [appointmentToReview, setAppointmentToReview] = useState(null)
  const [reviewRating, setReviewRating] = useState(5)
  const [reviewComment, setReviewComment] = useState("")

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfileData({
      ...profileData,
      [name]: value,
    })
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would update the user profile in the database
    console.log("Updated profile:", profileData)
    setIsEditingProfile(false)
  }

  const handleCancelAppointment = (id) => {
    // In a real app, this would cancel the appointment in the database
    console.log("Cancelling appointment:", id)
    alert(`Appointment #${id} has been cancelled.`)
  }

  const openReviewModal = (appointment) => {
    setAppointmentToReview(appointment)
    setShowReviewModal(true)
  }

  const handleReviewSubmit = () => {
    // In a real app, this would submit the review to the database
    console.log("Review submitted:", {
      appointmentId: appointmentToReview.id,
      rating: reviewRating,
      comment: reviewComment,
    })
    setShowReviewModal(false)
    setReviewRating(5)
    setReviewComment("")
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  if (!currentUser) {
    return null // Will redirect in useEffect
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="dashboard-page"
    >
      {/* Dashboard Header */}
      <section className="dashboard-header">
        <div className="container">
          <div className="dashboard-welcome">
            <h1>Welcome, {currentUser.name || "Guest"}</h1>
            <p>Manage your appointments and access exclusive offers</p>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="dashboard-content">
        <div className="container">
          <div className="dashboard-grid">
            {/* Sidebar */}
            <div className="dashboard-sidebar">
              <div className="user-info">
                <div className="user-avatar">
                  <img src="https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg" alt="User Avatar" />
                </div>
                <div className="user-details">
                  <h3>{currentUser.name || "Guest"}</h3>
                  <p>{currentUser.email}</p>
                </div>
              </div>

              <nav className="dashboard-nav">
                <button
                  className={`nav-item ${activeTab === "appointments" ? "active" : ""}`}
                  onClick={() => setActiveTab("appointments")}
                >
                  <FaCalendarAlt className="nav-icon" />
                  <span>Upcoming Appointments</span>
                </button>
                <button
                  className={`nav-item ${activeTab === "history" ? "active" : ""}`}
                  onClick={() => setActiveTab("history")}
                >
                  <FaHistory className="nav-icon" />
                  <span>Appointment History</span>
                </button>
                <button
                  className={`nav-item ${activeTab === "offers" ? "active" : ""}`}
                  onClick={() => setActiveTab("offers")}
                >
                  <FaGift className="nav-icon" />
                  <span>Special Offers</span>
                </button>
                <button
                  className={`nav-item ${activeTab === "profile" ? "active" : ""}`}
                  onClick={() => setActiveTab("profile")}
                >
                  <FaUser className="nav-icon" />
                  <span>Profile Settings</span>
                </button>
                <button
                  className={`nav-item ${activeTab === "payment" ? "active" : ""}`}
                  onClick={() => setActiveTab("payment")}
                >
                  <FaCreditCard className="nav-icon" />
                  <span>Payment Methods</span>
                </button>
                <button
                  className={`nav-item ${activeTab === "notifications" ? "active" : ""}`}
                  onClick={() => setActiveTab("notifications")}
                >
                  <FaBell className="nav-icon" />
                  <span>Notifications</span>
                </button>
                <button className="nav-item logout" onClick={handleLogout}>
                  <FaSignOutAlt className="nav-icon" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>

            {/* Main Content */}
            <div className="dashboard-main">
              {/* Upcoming Appointments Tab */}
              {activeTab === "appointments" && (
                <div className="dashboard-tab">
                  <div className="tab-header">
                    <h2>Upcoming Appointments</h2>
                    <Link to="/booking" className="btn btn-primary">
                      Book New Appointment
                    </Link>
                  </div>

                  {upcomingAppointments.length > 0 ? (
                    <div className="appointments-list">
                      {upcomingAppointments.map((appointment) => (
                        <div key={appointment.id} className="appointment-card">
                          <div className="appointment-details">
                            <h3>{appointment.service}</h3>
                            <p className="appointment-stylist">with {appointment.stylist}</p>
                            <div className="appointment-meta">
                              <div className="meta-item">
                                <FaCalendarAlt className="meta-icon" />
                                <span>{new Date(appointment.date).toLocaleDateString()}</span>
                              </div>
                              <div className="meta-item">
                                <FaCalendarAlt className="meta-icon" />
                                <span>{appointment.time}</span>
                              </div>
                            </div>
                            <div className={`appointment-status ${appointment.status.toLowerCase()}`}>
                              {appointment.status}
                            </div>
                          </div>
                          <div className="appointment-actions">
                            <button className="btn btn-secondary btn-sm">
                              <FaEdit className="btn-icon" />
                              Reschedule
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleCancelAppointment(appointment.id)}
                            >
                              <FaTrash className="btn-icon" />
                              Cancel
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="no-data">
                      <p>You have no upcoming appointments.</p>
                      <Link to="/booking" className="btn btn-primary">
                        Book an Appointment
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Appointment History Tab */}
              {activeTab === "history" && (
                <div className="dashboard-tab">
                  <div className="tab-header">
                    <h2>Appointment History</h2>
                  </div>

                  {appointmentHistory.length > 0 ? (
                    <div className="appointments-list">
                      {appointmentHistory.map((appointment) => (
                        <div key={appointment.id} className="appointment-card">
                          <div className="appointment-details">
                            <h3>{appointment.service}</h3>
                            <p className="appointment-stylist">with {appointment.stylist}</p>
                            <div className="appointment-meta">
                              <div className="meta-item">
                                <FaCalendarAlt className="meta-icon" />
                                <span>{new Date(appointment.date).toLocaleDateString()}</span>
                              </div>
                              <div className="meta-item">
                                <FaCalendarAlt className="meta-icon" />
                                <span>{appointment.time}</span>
                              </div>
                            </div>
                            <div className={`appointment-status ${appointment.status.toLowerCase()}`}>
                              {appointment.status}
                            </div>
                            {appointment.reviewed && (
                              <div className="appointment-rating">
                                {[...Array(5)].map((_, i) => (
                                  <FaStar
                                    key={i}
                                    className={i < appointment.rating ? "star-filled" : "star-empty"}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="appointment-actions">
                            {!appointment.reviewed && (
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() => openReviewModal(appointment)}
                              >
                                <FaStar className="btn-icon" />
                                Leave Review
                              </button>
                            )}
                            <button className="btn btn-secondary btn-sm">
                              <FaCalendarAlt className="btn-icon" />
                              Book Again
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="no-data">
                      <p>You have no appointment history.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Special Offers Tab */}
              {activeTab === "offers" && (
                <div className="dashboard-tab">
                  <div className="tab-header">
                    <h2>Special Offers</h2>
                  </div>

                  {specialOffers.length > 0 ? (
                    <div className="offers-list">
                      {specialOffers.map((offer) => (
                        <div key={offer.id} className="offer-card">
                          <div className="offer-content">
                            <h3>{offer.title}</h3>
                            <p>{offer.description}</p>
                            <div className="offer-meta">
                              <span className="offer-validity">Valid until: {offer.validUntil}</span>
                            </div>
                            <div className="offer-code">
                              <span>Use code:</span>
                              <strong>{offer.code}</strong>
                            </div>
                          </div>
                          <div className="offer-actions">
                            <Link to="/booking" className="btn btn-primary">
                              Use Offer
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="no-data">
                      <p>You have no special offers at this time.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Profile Settings Tab */}
              {activeTab === "profile" && (
                <div className="dashboard-tab">
                  <div className="tab-header">
                    <h2>Profile Settings</h2>
                    {!isEditingProfile && (
                      <button className="btn btn-primary" onClick={() => setIsEditingProfile(true)}>
                        Edit Profile
                      </button>
                    )}
                  </div>

                  <div className="profile-container">
                    {isEditingProfile ? (
                      <form className="profile-form" onSubmit={handleProfileSubmit}>
                        <div className="form-group">
                          <label htmlFor="name">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={profileData.name}
                            onChange={handleProfileChange}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleProfileChange}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="phone">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleProfileChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="address">Address</label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={profileData.address}
                            onChange={handleProfileChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="birthdate">Birth Date</label>
                          <input
                            type="date"
                            id="birthdate"
                            name="birthdate"
                            value={profileData.birthdate}
                            onChange={handleProfileChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="preferences">Service Preferences</label>
                          <textarea
                            id="preferences"
                            name="preferences"
                            value={profileData.preferences}
                            onChange={handleProfileChange}
                            placeholder="Tell us about your preferences for services, products, etc."
                            rows="4"
                          ></textarea>
                        </div>

                        <div className="form-actions">
                          <button type="button" className="btn btn-secondary" onClick={() => setIsEditingProfile(false)}>
                            Cancel
                          </button>
                          <button type="submit" className="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="profile-details">
                        <div className="profile-section">
                          <h3>Personal Information</h3>
                          <div className="profile-info">
                            <div className="info-item">
                              <span className="info-label">Name:</span>
                              <span className="info-value">{profileData.name || "Not provided"}</span>
                            </div>
                            <div className="info-item">
                              <span className="info-label">Email:</span>
                              <span className="info-value">{profileData.email || "Not provided"}</span>
                            </div>
                            <div className="info-item">
                              <span className="info-label">Phone:</span>
                              <span className="info-value">{profileData.phone || "Not provided"}</span>
                            </div>
                            <div className="info-item">
                              <span className="info-label">Address:</span>
                              <span className="info-value">{profileData.address || "Not provided"}</span>
                            </div>
                            <div className="info-item">
                              <span className="info-label">Birth Date:</span>
                              <span className="info-value">{profileData.birthdate || "Not provided"}</span>
                            </div>
                          </div>
                        </div>

                        <div className="profile-section">
                          <h3>Service Preferences</h3>
                          <p>{profileData.preferences || "No preferences specified."}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Payment Methods Tab */}
              {activeTab === "payment" && (
                <div className="dashboard-tab">
                  <div className="tab-header">
                    <h2>Payment Methods</h2>
                    <button className="btn btn-primary">Add Payment Method</button>
                  </div>

                  <div className="payment-methods">
                    <div className="payment-card">
                      <div className="card-icon">
                        <FaCreditCard />
                      </div>
                      <div className="card-details">
                        <h3>Visa ending in 4242</h3>
                        <p>Expires: 12/2025</p>
                        <div className="card-status">Default</div>
                      </div>
                      <div className="card-actions">
                        <button className="btn btn-secondary btn-sm">Edit</button>
                        <button className="btn btn-danger btn-sm">Remove</button>
                      </div>
                    </div>

                    <div className="payment-card">
                      <div className="card-icon">
                        <FaCreditCard />
                      </div>
                      <div className="card-details">
                        <h3>Mastercard ending in 5678</h3>
                        <p>Expires: 08/2024</p>
                      </div>
                      <div className="card-actions">
                        <button className="btn btn-secondary btn-sm">Edit</button>
                        <button className="btn btn-danger btn-sm">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === "notifications" && (
                <div className="dashboard-tab">
                  <div className="tab-header">
                    <h2>Notifications</h2>
                  </div>

                  <div className="notifications-settings">
                    <div className="notification-option">
                      <div className="option-details">
                        <h3>Email Notifications</h3>
                        <p>Receive appointment reminders and updates via email</p>
                      </div>
                      <div className="option-toggle">
                        <input type="checkbox" id="emailNotifications" defaultChecked />
                        <label htmlFor="emailNotifications"></label>
                      </div>
                    </div>

                    <div className="notification-option">
                      <div className="option-details">
                        <h3>SMS Notifications</h3>
                        <p>Receive appointment reminders and updates via text message</p>
                      </div>
                      <div className="option-toggle">
                        <input type="checkbox" id="smsNotifications" defaultChecked />
                        <label htmlFor="smsNotifications"></label>
                      </div>
                    </div>

                    <div className="notification-option">
                      <div className="option-details">
                        <h3>Promotional Emails</h3>
                        <p>Receive special offers and promotions</p>
                      </div>
                      <div className="option-toggle">
                        <input type="checkbox" id="promoNotifications" defaultChecked />
                        <label htmlFor="promoNotifications"></label>
                      </div>
                    </div>

                    <div className="notification-option">
                      <div className="option-details">
                        <h3>Appointment Reminders</h3>
                        <p>Receive reminders 24 hours before your appointment</p>
                      </div>
                      <div className="option-toggle">
                        <input type="checkbox" id="reminderNotifications" defaultChecked />
                        <label htmlFor="reminderNotifications"></label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="modal-overlay">
          <div className="review-modal">
            <h2>Leave a Review</h2>
            <p>
              {appointmentToReview.service} with {appointmentToReview.stylist} on{" "}
              {new Date(appointmentToReview.date).toLocaleDateString()}
            </p>

            <div className="rating-select">
              <p>How would you rate your experience?</p>
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < reviewRating ? "star-filled" : "star-empty"}
                    onClick={() => setReviewRating(i + 1)}
                  />
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="reviewComment">Comments (Optional)</label>
              <textarea
                id="reviewComment"
                value={reviewComment}
                onChange={(e) => setReviewComment(e.target.value)}
                placeholder="Share your experience..."
                rows="4"
              ></textarea>
            </div>

            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={() => setShowReviewModal(false)}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleReviewSubmit}>
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default UserDashboard
