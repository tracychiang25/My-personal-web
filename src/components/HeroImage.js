import '../index.css';
import { ReactTyped } from "react-typed";

function HeroImage() {
  
  return(
  <div className='heroimage'>
    <div className="animated-text">
      I am a {' '}
      <ReactTyped  //Display texts in typing effect
        strings={[
          "developer",
          "dog lover",
          "foodie",
          "pescatarian"
        ]}
        //Speed of the typing effects
        typeSpeed={200} 
        backSpeed={100}      
        loop
      />
    </div>

  </div>);
}


export default HeroImage;
