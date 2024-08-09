import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './counter.css';

const Counter = ({ title, value }) => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const startCounting = useCallback(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // Duration in milliseconds
    const increment = end / (duration / 100);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 100);

    return () => clearInterval(timer);
  }, [value]);

  useEffect(() => {
    if (isHovered) {
      // Restart counting on hover
      startCounting();
    } else {
      // Normal counting
      startCounting();
    }
  }, [isHovered, startCounting]);

  return (
    <div 
      className="counter" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="counter__title">{title}</h3>
      <p className="counter__value">{count}+</p>
    </div>
  );
};

// PropTypes validation
Counter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Counter;
