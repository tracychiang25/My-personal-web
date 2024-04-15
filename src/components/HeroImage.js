import image from '../assets/HeroImage.jpg'
import '../index.css';
import { ReactTyped } from "react-typed";

function HeroImage() {
  
  return(
  <div className='heroimage'>
    <div className="animated-text">
      I am a {' '}
      <ReactTyped 
        strings={[
          "developer",
          "dog lover",
          "foodie"
        ]}
        typeSpeed={150}
        backSpeed={100}      
        loop
      />
    </div>

  </div>);
}


export default HeroImage;
