import Navbar from './Navbar';
import Home from './Home';
import Resume from './Resume';
import Portfolio from './Portfolio';
import About from './About';
import Footer from './Footer';
import FavoriteColour from './FavoriteColour';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
        </Routes>
        <Routes>
          <Route path='/about' element = {<About />} />
        </Routes>
        <Routes>
          <Route path='/resume' element = {<Resume />} />
        </Routes>
        <Routes>
          <Route path='/portfolio' element = {<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
      

      
    </div>
  );
}

export default App;
