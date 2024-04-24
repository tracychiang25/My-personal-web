import '../index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(){

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
      <nav className="navbar">
        <h1>Tracy Chiang</h1>
        {/* Link to each pages */}
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;