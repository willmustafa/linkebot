import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Home from './pages/Home';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  ChartDataLabels,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
