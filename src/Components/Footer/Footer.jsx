import "./Footer.css";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaPhoneSquareAlt,
} from "react-icons/fa";

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const name = event.target.name.value;
    const message = event.target.message.value;

    // Prepare the message
    const formattedMessage = `Name: ${name}%0AMessage: ${message}`;
    
    // Replace '3453707530' with the actual WhatsApp number (in international format, without '+' sign)
    const whatsappNumber = '3453707530';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

    // Redirect to WhatsApp
    window.location.href = whatsappURL;
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__section footer__quick-search">
          <h4>Quick Search</h4>
          <ul className="footer-items">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__section footer__social-links">
          <h4>Social Links</h4>
          <div className="footer__social-icons">
            <a
              href="https://www.facebook.com/engfaisalsarwer/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/3453707530"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="tel:+3453707530"
              aria-label="Contact Phone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhoneSquareAlt />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer__section footer__about-address">
          <div className="footer__content">
            <h4>About GS Builder</h4>
            <p>
              GS Builder is a leading construction company in Islamabad with a
              reputation for excellence. We specialize in delivering
              high-quality projects on time and within budget. Our team of
              experts brings international experience and innovative solutions
              to every project, ensuring exceptional results.
            </p>
          </div>
          <div className="footer__content">
            <h4>Address</h4>
            <p>
              Office # 112 Margall View Housing Socity Park View Plaza D-17/2
              Islamabad Pakistan.
            </p>
          </div>
          <div className="footer__content">
            <h4>Contact</h4>
            <p>WhatsApp: +92 3453707530</p>
            <p>Phone: +92 3115699950</p>
          </div>
        </div>

        <div className="footer__section footer__contact">
          <form
            className="footer__form"
            onSubmit={handleSubmit}
          >
            <h4>Contact Us</h4>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
           
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} @gsdeveloper. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
