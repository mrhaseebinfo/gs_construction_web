// CEOProfile.js
import './Ceo.css';
import ceoImage from '../../../assets/CEO.jpg'; //Adjust the path as needed
import {motion} from 'framer-motion';

const CEOProfile = () => {
  return (
    <div className="ceo-profile">
      <div className="ceo-header">
      <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 500 }}
          src={ceoImage}
          alt="CEO"
          className="ceo-image"
        />
        <h2 className="ceo-name">
        <h6>CEO:</h6>
        Engr <span> Faisal Sarwer</span></h2>
      </div>
      <div className="ceo-message">
        <h3>CEO Message</h3>
        <p>
          At GS Builder & Engineer, we are dedicated to pushing the boundaries of engineering and construction excellence. Our mission is to deliver outstanding results through innovation, quality, and integrity. With a focus on client satisfaction and sustainable practices, our team works tirelessly to transform visions into reality. Thank you for trusting us with your projects and for being part of our journey. Together, we build not just structures, but lasting relationships and enduring success.
        </p>
      </div>
    </div>
  );
};

export default CEOProfile;
