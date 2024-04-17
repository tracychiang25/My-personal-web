import './index.css';
import {Link} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer(){
    return(
        <footer className="footer">
            <section>
                <Link to="/"><FacebookIcon /></Link>
                <Link to="/"><YouTubeIcon /></Link>
                <Link to="https://www.linkedin.com/in/tracy-chiang-620b46177/"><LinkedInIcon /></Link>
             </section>
            
        </footer>
    )
}

export default Footer;