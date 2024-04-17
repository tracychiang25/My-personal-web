import selfie from './assets/selfie.jpg';
import './index.css';

function About(){

return(
    <div>
        <p>I am a Computer Science student in QUT. </p>
        <img className="selfie" src= {selfie} />
    </div>
    
);
}

export default About;