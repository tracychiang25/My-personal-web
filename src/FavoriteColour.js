import React, {useState} from 'react';
import Button from '@mui/material/Button';


function FavoriteColour(){
    const [colour, setColour] = useState("");

    return(
        <div className="colour">
            <p>My favorite colour is {colour}</p>
            <Button variant="contained" color="success" onClick={()=> setColour("blue")}>
            Blue
            </Button>
    
    <button type="button"
    >Blue</button>
    <button type="button"
    onClick={()=> setColour("red")}>Red</button>
    <br></br>
    <button type="button"
    onClick={()=> setColour("yellow")}>Yellow</button>
    </div>
    );
    
}
export default FavoriteColour;