import '../index.css';
import {Link} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer(){
    return(
        <footer className="footer">
            <section>
                <Link to="https://www.facebook.com/profile.php?id=100002778670691"><FacebookIcon /></Link>
                <Link to="https://youtube.com/@SuperA8520?si=l5E_U-WlR5qVeWFJ"><YouTubeIcon /></Link>
                <Link to="https://www.linkedin.com/in/tracy-chiang-620b46177/"><LinkedInIcon /></Link>
                <p>©2024 All rights reserved</p>
            </section>
            
        </footer>
    )
}

export default Footer;