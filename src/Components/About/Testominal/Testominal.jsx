// Testimonial.js

import PropTypes from "prop-types";
import "./Testominal.css"; // Optional CSS file for individual testimonial styling
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

const Testimonial = ({ image, text, name, date }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-image">
        <img src={image} alt={name} />
      </div>
      <div className="testimonial-content">
        <span className="star"><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStarHalf/></span>
        <h6>{name}</h6>
        <p>{date}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Testimonial;
