import Slider from "react-slick";
import "./Home.css"; // Ensure the CSS file name matches
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import { motion } from "framer-motion";
// Import images correctly
import image8 from "../../assets/image8.jpg";
import image10 from "../../assets/image10.jpg";
import image12 from "../../assets/image12.jpg";
import image14 from "../../assets/image14.jpg";
import image16 from "../../assets/image16.jpeg"; // Verify this file exists
import building5 from "../../assets/building-5.jpeg";
import project1 from "../../assets/project1.jpeg"; // Corrected file name
import project3 from "../../assets/project3.jpeg";
import project5 from "../../assets/project5.jpeg"; // Updated to .png
import project6 from "../../assets/project6.jpeg";
import Counter from "../Counter/Counter.jsx";
import ContentSection from "../Content/Content.jsx";

// Array of images with correct references
const sliderImages = [
  { src: image8, alt: "Slide 1" },
  { src: image10, alt: "Slide 2" },
  { src: image12, alt: "Slide 3" },
  { src: image14, alt: "Slide 4" },
  { src: image16, alt: "Slide 5" },
];

const settings = {
  dots: true, // Show dots for navigation
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Adjust the speed (milliseconds)
  arrows: false, // Hide arrows if not needed
};

const motionEffects = {
  whileHover: {
    scale: 1.1,
  },
  transition: {
    type: "spring",
    stiffness: 500,
  },
};

const HomeSection = () => {
  return (
    <>
      <section className="home-section">
        <Slider {...settings} className="home-slider">
          {sliderImages.map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image.src} alt={image.alt} className="slider-image" />
              <div className="slider-content">
                <h1>GS Builder & Engineer</h1>
                <p className="company-description">
                  Build Your Vision, Creating Reality...
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <a
          href="https://wa.me/3453707530"
          className="help-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="help-icon" />
          <span className="button-text">How Can I Help You?</span>
        </a>
      </section>
      <section className="grid-container">
        <motion.div className="text" {...motionEffects}>
          <h3>
            Welcome to
            <h1 className="logo">GS Builder </h1>
          </h3>
          <h6>PEC Approved Engineers & Constructors in Islamabad, Pakistan</h6>
        </motion.div>
        <div className="zoom-image-container">
          <div className="image">
            <img src={building5} alt="Building" />
          </div>
        </div>
      </section>

      <section className="section-background">
        <div className="text-content-center">
          <h2>Our Construction Portfolio</h2>
        </div>
        <div className="content">
          <div className="text-content">
            <h3>
            Top-Rated Construction Firm in Islamabad with Worldwide Experience
            </h3>
            <p>
            At GS Builders, our commitment to precision, innovative design, strong engineering, and superior craftsmanship sets us apart in the construction sector. Our dedication to timely project completion places us well ahead of the competition
            </p>
          </div>
          <div className="image-grid">
            <div className="image-item">
              <div className="image-wrapper">
                <div
                  className="image-front"
                  style={{ backgroundImage: `url(${project1})` }}
                />
                <div className="image-back">
                  <h4>Image 1 Title</h4>
                  <p>Image 1 Description</p>
                </div>
              </div>
            </div>
            <div className="image-item">
              <div className="image-wrapper">
                <div
                  className="image-front"
                  style={{ backgroundImage: `url(${project5})` }}
                />
                <div className="image-back">
                  <h4>Image 5 Title</h4>
                  <p>Image 5 Description</p>
                </div>
              </div>
            </div>
            <div className="image-item">
              <div className="image-wrapper">
                <div
                  className="image-front"
                  style={{ backgroundImage: `url(${project3})` }}
                />
                <div className="image-back">
                  <h4>Image 3 Title</h4>
                  <p>Image 3 Description</p>
                </div>
              </div>
            </div>
            <div className="image-item">
              <div className="image-wrapper">
                <div
                  className="image-front"
                  style={{ backgroundImage: `url(${project6})` }}
                />
                <div className="image-back">
                  <h4>Image 6 Title</h4>
                  <p>Image 6 Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="home">
      <div className="home__counters">
        <Counter title="Projects Design" value={120} />
        <Counter title="Project Renovation" value={85} />
        <Counter title="Project Construction" value={100} />
        <Counter title="Awards" value={30} />
      </div>
    </section>


    <section >
      <ContentSection/>
    </section>

   
    </>
  );
};

export default HomeSection;
