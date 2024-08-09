// ServicePage.js
import "./Service.css"; // Import the CSS file
import heroImage from "../../assets/image14.jpg"; // Update the path to your hero image
import { Link } from "react-router-dom";
import Renovation from "../../assets/Service (1).jpg";
import construction from "../../assets/Service (2).jpg";
import ArtDesign from "../../assets/Service (3).jpg";
import soiltesting from "../../assets/Service (4).jpg";
import service5 from "../../assets/Service (5).jpg";
import service6 from "../../assets/Service (6).jpg";
import service7 from "../../assets/Service (7).jpg";
import Grey from "../../assets/Grey.jpg";
import fullCostruction from '../../assets/full.jpg';
import { FaWhatsapp } from "react-icons/fa";


// Define service items with images and titles
const services = [
  { image: soiltesting, title: "Soil Testing" },
  { image: ArtDesign, title: "Architecture Design" },
  { image: construction, title: "Construction Service" },
  { image: Renovation, title: "Renovation" },
  { image: Grey, title: "Grey Structure" },
  { image: service7, title: "Planning" },
  { image: service6, title: "Project Management & Supervision" },
  { image: service5, title: "Property Management Service" },
];

const ServicePage = () => {
  return (
    <div className="service-page">
      <section className="hero-section">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Our Services</h1>
        </div>
      </section>
      <section className="service-content">
        <div className="content-container">
          <h2>Welcome to Our Service Page</h2>
          <p>
            At GS Builder & Engineer, we offer a range of services tailored to
            meet your needs. From construction and renovation to project
            management and consultancy, our expert team is here to provide
            high-quality solutions for your projects.
          </p>
          <p>
            Our commitment to excellence ensures that every project is handled
            with the utmost care and professionalism. Explore our services to
            see how we can assist you with your next endeavor.
          </p>
        </div>

        <div className="service-container">
          <div className="service-grid">
            {services.map((service, index) => (
              <Link className="service-item" key={index}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <h3 className="service-title">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-section">
      <div className="feature-container">
        <img
          src={fullCostruction}
          alt="Feature"
          className="feature-image"
        />
        <div className="feature-overlay">
          <h6 className="feature-subtitle">Explore the Features</h6>
          <h2 className="feature-title">Full Project Management</h2>
          <p className="feature-description">
            GS Builder & Engineer is one Window Construction Solution Company in
            Islamabad that offers a range of services.
          </p>
          <Link to="/contact" className="feature-button">
            Click me
          </Link>
        </div>
      </div>
    </section>
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

export default ServicePage;
