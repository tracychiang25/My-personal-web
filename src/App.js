import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import VideoPage from './components/VideoPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/resume' element = {<Resume />} />
          <Route path='/portfolio' element = {<Portfolio />} />
          <Route path="/portfolio/:videoId" element={<VideoPage />} />
        </Routes>
        <Footer />
      </Router>
      

      
    </div>
  );
}

export default App;
