import './Navbar.css';
import Logo from '../../assets/logo.png';
import { motion } from 'framer-motion';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const motionEffect = {
  whileHover: {
    scale: 1.1,
  },
  transition: {
    type: 'spring',
    stiffness: 500,
  },
};

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <motion.img
          {...motionEffect}
          src={Logo}
          alt="Company Logo"
          className="navbar__logo-image"
        />
        <motion.span {...motionEffect} className="navbar__logo-name">
          GS BUILDER
        </motion.span>
      </div>
      <ul className="navbar__menu">
        <motion.li {...motionEffect} className="navbar__item">
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li {...motionEffect} className="navbar__item">
          <Link to="/about">About</Link>
        </motion.li>
        <motion.li {...motionEffect} className="navbar__item">
          <Link to="/services">Services</Link>
        </motion.li>
        <motion.li {...motionEffect} className="navbar__item">
          <Link to="/projects">Projects</Link>
        </motion.li>
        <motion.li {...motionEffect} className="navbar__item">
          <Link to="/blog">Blog</Link>
        </motion.li>
        <motion.li {...motionEffect} className="navbar__item">
          <Link to="/contact">Contact</Link>
        </motion.li>
      </ul>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
        className="navbar__social-icons"
      >
        <a
          href="https://www.facebook.com/engfaisalsarwer/"
          className="navbar__social-icon"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://wa.me/3453707530"
          className="navbar__social-icon"
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://linkedin.com"
          className="navbar__social-icon"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com"
          className="navbar__social-icon"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </nav>
  );
}

export default Navbar;
