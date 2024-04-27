import HeroImage from './HeroImage';
import ButtonBases from './ButtonBase';
import { useEffect } from 'react';

function Home(){
    useEffect(() => {
        document.title = "Home";
      }, []);
    return(
        <>
         <HeroImage />
         <ButtonBases />
        </>

    )
}
export default Home;