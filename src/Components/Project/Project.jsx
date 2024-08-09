// ServicePage.js
import Counter from "../Counter/Counter";
import "./Project.css"; // Import the CSS file
import { Link } from "react-router-dom";
import Awt1 from "../../assets/project1.jpeg"; // Corrected file name
import Awt2 from "../../assets/project3.jpeg";
import Awt3 from "../../assets/project5.jpeg"; // Updated to .png
import Awt4 from "../../assets/Awtjpg.jpg";
import Abbottabad from "../../assets/Abbottabad.jpg";
import I10   from "../../assets/project6.jpeg";
import Bolachistan   from "../../assets/bolachistan.jpg";
import wahCant   from "../../assets/project4.jpeg";
import { FaWhatsapp } from "react-icons/fa";
// Define service items with images and titles
const services = [

  { image: Awt1, title: "Awt Islamabad" },
  { image: Awt2, title: "Awt Islamabad" },
  { image: Awt3, title: "Awt Islamabad" },
  { image: Abbottabad, title: "Abbottabad" },
  { image: Bolachistan, title: "Bolachistan Turbat" },
  { image: wahCant, title: "Wah-Cantt Taxila" },
  { image: Awt4, title: "Awt Islamabad" },
  { image: I10, title: "I-10/3 Islamabad" },
];

const Project = () => {
  return (
    <div className="project-page">
      <section className="hero-section">
        <img src={Bolachistan } alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Our Projects</h1>
        </div>
      </section>
      <section className="project-content">
        <div className="content-container">
          <h1>Welcome to Our Projects</h1>
          <p>
            At GS Builder & Engineer, we take pride in delivering exceptional
            construction and renovation projects tailored to meet your specific
            needs. From initial design to project completion, our dedicated team
            ensures every aspect of your project is executed with precision and
            excellence.
          </p>
          <p>
            Our portfolio includes a diverse range of projects, showcasing our
            ability to handle various types of construction, renovation, and
            project management tasks. Explore our projects to see how our
            expertise can bring your vision to life.
          </p>

          <h2>Why Choose Us?</h2>
          <p>
            At GS Builder & Engineer, our commitment to quality and
            professionalism is reflected in every project we undertake. We work
            closely with our clients to ensure their needs and expectations are
            met, delivering results that exceed expectations.
          </p>
          <p>
            Our experienced team utilizes the latest techniques and materials to
            provide innovative solutions for your construction and renovation
            projects. Trust us to handle your project with the utmost care and
            attention to detail, ensuring a smooth and successful outcome.
          </p>
        </div>
        <section className="Counter">
          <div className="home__counters">
            <Counter title="Projects Design" value={120} />
            <Counter title="Project Renovation" value={85} />
            <Counter title="Project Construction" value={100} />
            <Counter title="Awards" value={30} />
          </div>
        </section>
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

export default Project;
