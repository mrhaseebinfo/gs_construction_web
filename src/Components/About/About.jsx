import "./About.css";
import Mission from "../../assets/mission.jpg";
import About from "../../assets/aboutus.jpg";
import Vision from "../../assets/vision.jpg";
import AboutImage from "../../assets/image16.jpeg";
import Counter from "../Counter/Counter";
import TestimonialsSlider from "./Testominal/TestominalSlider.jsx";
import CEOProfile from "./CEO/Ceo.jsx";
import { FaWhatsapp } from "react-icons/fa";

const AboutUS = () => {
  return (
    <div className="about-us">
      <section className="hero-section">
        <img src={About} alt="About Us" className="hero-image" />
        <div className="hero-content">
          <h1>About Us</h1>
        </div>
      </section>

      <div className="CEO">
        <CEOProfile/>
      </div>

      <section className="services-section">
        <div className="text-content">
          <h2>Our Expertise</h2>
          <p>
            At GS Builder & Engineer, we provide a wide range of engineering and
            construction services tailored to meet the needs of our diverse
            clientele. Our team of experts is dedicated to delivering
            high-quality, comprehensive solutions across various sectors.
          </p>
          <h3>Our Services Include:</h3>
          <ul>
            <li>Structural Engineering and Design</li>
            <li>Construction Management and Supervision</li>
            <li>Site Development and Preparation</li>
            <li>Renovation and Upgrades</li>
            <li>Project Planning and Consultancy</li>
            <li>Building Information Modeling (BIM)</li>
          </ul>
        </div>
        <div className="image-container">
          <img src={AboutImage} alt="Our Expertise" />
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="mission-statement">
          <div className="image-container">
            <img src={Mission} alt="Mission" />
          </div>
          <div className="text-content Long">
            <h2>Our Mission</h2>
            <p>
              Our mission is to create sustainable, functional, and
              aesthetically pleasing spaces that enhance the quality of life for
              our clients and the community. We strive to push the boundaries of
              engineering and construction, and best practices to deliver
              projects that exceed our clients’ expectations.
            </p>
            <h3>Our Values</h3>
            <ul>
              <li>
                Quality:
                <p>
                  We are committed to delivering top-notch projects that meet
                  the highest standards of quality and safety.
                </p>
              </li>
              <li>
                Innovation:
                <p>
                  We embrace creativity and innovation, constantly seeking new
                  and better ways to build and create.
                </p>
              </li>
              <li>
                Sustainability:
                <p>
                  We prioritize environmentally friendly and sustainable
                  solutions in our projects.
                </p>
              </li>
              <li>
                Client-centricity:
                <p>
                  We put our clients at the heart of everything we do, ensuring
                  their needs and goals are met.
                </p>
              </li>
              <li>
                Teamwork:
                <p>
                  We believe in collaboration and mutual respect among our team
                  members, clients, and stakeholders.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="vision-statement">
          <div className="text-content">
            <h2>Our Vision</h2>
            <p>
              GS Builder & Engineer believes in long-term sustainable
              relationships with our valuable customers. Serving them with an
              outstanding level of integrity & expertise.
            </p>
            <h3>Our Commitment</h3>
            <p>
              At GS Builder, we are dedicated to building long-term
              relationships with our clients, founded on:
            </p>
            <ul>
              <li>Trust</li>
              <li>Transparency</li>
              <li>Exceptional service</li>
            </ul>
            <p>
              We look forward to collaborating with you on your next project.
            </p>
          </div>
          <div className="image-container">
            <img src={Vision} alt="Vision" />
          </div>
        </div>
      </section>
      <div className="about">
        <div className="home">
          <div className="home__counters">
            <Counter title="Projects Design" value={120} />
            <Counter title="Project Renovation" value={85} />
            <Counter title="Project Construction" value={100} />
            <Counter title="Awards" value={30} />
          </div>
        </div>
        <div className="testominal">
          <TestimonialsSlider />
        </div>
      </div>
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

export default AboutUS;
