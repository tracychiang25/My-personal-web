import Navbar from './components/Navbar';
import Home from './Home';
import FavoriteColour from './components/FavoriteColour';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
        </Routes>
        <div className="content">
          <FavoriteColour />
        </div>
        

      </Router>
      

      
    </div>
  );
}

export default App;
