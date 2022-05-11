import React from "react"
import { Bar } from "react-chartjs-2"

const HorizontalChart = (dataInput) => {
	let options = {
		indexAxis: "y",
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			datalabels: {
				anchor: "end",
				align: "end",
				color: "#ffffff",
				font: {
					weight: "bold",
					size: 16
				}
			}
		},
		scales:{
			x: {
				display: false
			},
			y: {
				ticks: {
					color: "white",
					font: {
						size: 16
					}
				}
			}
		},
		barThickness: 20,
		borderRadius: 5,
		order: 1,
		layout: {
			padding: {
				right: 50
			}
		}
	}

	if(dataInput.inPercentage){
		options.plugins.datalabels.formatter = function(value) {
			return value + "%"
		}
	}

	const colors = [
		"#7FBA27",
		"#6AC2BA",
		"#E62D28",
		"#344B9A",
		"#E72585",
		"#7FBA27",
		"#6AC2BA",
		"#E62D28",
		"#344B9A",
		"#E72585"
	]
	
	const data = {
		labels: dataInput.data.map(el => el._id),
		datasets: [
			{
				data: dataInput.data.map(el => el.qtd),
				backgroundColor: colors[Math.floor(Math.random() * 10)],
				categoryPercentage: 1.0,
				barPercentage: 1.0
			}
		]
	}

	return <Bar className="z-index-2" options={options} data={data} />
}

export default HorizontalChart