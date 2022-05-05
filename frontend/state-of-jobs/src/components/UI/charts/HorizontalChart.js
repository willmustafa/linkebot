import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
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

export const options = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      anchor: 'end',
      align: 'end',
      color: '#ffffff',
      font: {
        weight: 'bold',
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
        color: 'white',
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
};

export const data = {
  labels: ['Presencial', 'Remoto', 'Híbrido'],
  datasets: [
    {
      data: [500, 300, 200],
      backgroundColor: '#ffae11',
      categoryPercentage: 1.0,
      barPercentage: 1.0
    }
  ]
};

const HorizontalChart = () => {
  return <Bar options={options} data={data} />;
}

export default HorizontalChart