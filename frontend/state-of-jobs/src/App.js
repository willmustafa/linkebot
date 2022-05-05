import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className='wrapper'>
        <Navbar />
        <Home />
      </div>
    </Router>
  );
}

export default App;
