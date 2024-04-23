import { useState } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

function Button() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <button onClick={handleClick}> {/* handles hamburger menu sidebar*/}
        {click ? <CloseIcon /> : <DehazeIcon />}  
      </button>
    </div>
  );
}

export default Button;
