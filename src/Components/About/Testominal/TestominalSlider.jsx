// TestimonialsSlider.js
import { useState, useEffect } from "react";
import Testimonial from "./Testominal";
import "./Testominal.css"; // Import the CSS file
import profile1 from "../../../assets/profile1 (1).jpg";
import profile2 from "../../../assets/profile1 (2).jpg";
import profile3 from "../../../assets/profile1 (3).jpg";
import profile4 from "../../../assets/profile1 (4).jpg";

const testimonialsData = [
  {
    image: profile1,
    text: "GS Builders is the best for construction,gray structure renovation, and creating a good work environment.",
    name: "Wani Ihtram",
    date: "December 6, 2023",
  },
  {
    image: profile2,
    text: "Excellent service and high-quality work!",
    name: "Jane Doe",
    date: "January 15, 2024",
  },
  {
    image: profile3,
    text: "Highly recommended for their professionalism.",
    name: "John Smith",
    date: "February 20, 2024",
  },
  {
    image: profile4,
    text: "A pleasure to work with from start to finish.",
    name: "Alice Johnson",
    date: "March 10, 2024",
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonialsData.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [totalSlides]);

  return (
    <section className="client-testimonials">
      <h2>Client Testimonials</h2>
      <div
        className="testimonials-container"
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}
      >
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <Testimonial
              image={testimonial.image}
              text={testimonial.text}
              name={testimonial.name}
              date={testimonial.date}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSlider;
