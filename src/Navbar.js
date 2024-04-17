import './index.css';
import Button from './button';
import { useState } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function Navbar(){

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
      <nav className="navbar">
        <h1>Tracy Chiang</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
            {click ? <DehazeIcon /> : <CloseIcon />}
        </div>
      </nav>
    );
  }
   
  export default Navbar;