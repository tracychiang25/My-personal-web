import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <DehazeIcon /> : <CloseIcon />}
                </div>
                <ul className={click ? 'nav-menu' : ''}>
                    <li className="nav-list">
                        <Link to='/' className='navbar-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link to='/about' className='navbar-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link to='/resume' className='navbar-links' onClick={closeMobileMenu}>
                            Resume
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link to='/portfolio' className='navbar-links' onClick={closeMobileMenu}>
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </div> 
        </nav>

    );
}

export default Navbar;