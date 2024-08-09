import { useState } from 'react';
import './Contact.css'; // Import the CSS file
import { motion } from 'framer-motion';
import heroImage from '../../assets/contact.jpg'; // Replace with the actual path to your image
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    // Reset the form or perform other actions if needed
    e.target.reset();
  };

  return (
    <div className="contact-page">
      <section className="hero-section">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Contact Us</h1>
        </div>
      </section>
      <section className="contact-content">
        <div className="content-container">
          <h2>Get in Touch</h2>
          <p>
            We are here to assist you with any inquiries or information you need. 
            Feel free to reach out to us using the contact form below or visit us at our address.
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="contact">Contact Number:</label>
            <input type="tel" id="contact" name="contact" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="address-info">
          <div className="footer__section footer__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.3281749228815!2d73.0582946143832!3d33.728523380798006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df92d8a2c382db%3A0x6b53b90c4ebca80!2sMargalla%20View%20Housing%20Society%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1634103456789"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
            <h3>Our Address</h3>
            <p>Office # 112 Park View Plaza Margallah View Housing Socity D-17/2 Islamabad, Pakistan</p>
            <p>Whatsapp: +92 345 3707530</p>
            <p>Phone: +92 311 5699950</p>
            <p>Email: info@gsbuilder.com</p>
          </div>
      </section>
      {showPopup && (
        <motion.div
          className="popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p>Thank you for your message! We’ll get back to you within the next 24 hours.</p>
          <button  onClick={() => setShowPopup(false)}>Close</button >
        </motion.div>
      )}
       <a
          href="https://wa.me/3453707530"
          className="help-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="help-icon" />
          <span className="button-text">How Can I Help You?</span>
        </a>
    </div>
  );
};

export default Contact;
