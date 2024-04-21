import selfie from '../assets/selfie.jpg';
import QUTConnect from '../assets/QUTConnect.jpg';
import React, {useState} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../index.css';

function About(){
    const[count, setCount] = useState(0); //Initial click counts
    const [size, setSize] = useState(17); //Initial size of the heart button

    const increaseSize = () => {
    setSize(size + 3); //Increase the size by 3 pixels each time the button is clicked
    setCount(count +1);
  };

return(
    
    <div className="about"> 
        <img className="selfie" src= {selfie} />
        <p className="aboutContent">
            Hi everyone! Welcome to my page.😄 <br />
            I am Tracy, currently studying computer science in QUT. <br />
            My favorite things to do are cooking, content creating and travelling.<br />
            <br />
            <br />
            click me to send some love!-{">"}&nbsp;
            <FavoriteIcon onClick={increaseSize} style={{ fontSize: `${size}px` }}/> {/*The heart button enlarges with each user click.*/}
            <p> you liked {count} times</p> {/*Also counts how many times user clicks on*/}
        
        </p>
        <img className="Connect101" src= {QUTConnect} />
    </div>
    
);
}

export default About;