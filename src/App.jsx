import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx'; // Adjust path as necessary
import AboutUS from './Components/About/About.jsx';
import Service from './Components/Service/Service';
import Project from './Components/Project/Project';
import Blog from './Components/Blog/Blog.jsx';
import Contact from './Components/Contact/Contact';
import HomeSection from "./Components/Home/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/services" element={<Service />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;



