import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js"
import ChartDataLabels from "chartjs-plugin-datalabels"
import React from "react"
import { animateScroll } from "react-scroll"
React.createRef(animateScroll)

ChartJS.register(
	CategoryScale,
	ChartDataLabels,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
)

function App() {
	return (
		<div className='wrapper'>
			<Navbar />
			<Home />
		</div>
	)
}

export default App
