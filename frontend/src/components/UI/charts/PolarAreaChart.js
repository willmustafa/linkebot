import React from 'react';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ChartDataLabels, RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Sênior', 'Pleno', 'Júnior', 'Não Informado'],
  datasets: [
    {
      data: [25, 12, 3, 5],
      backgroundColor: [
        '#dc6788',
        '#dcd267',
        '#67b7dc',
        '#67dc75',
      ],
      borderWidth: 0
    },
  ],
};

export const options = {
  plugins: {
    datalabels: {
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
      display: false
    },
    r: {
      display: false
    }
  }
}

const PolarAreaChart = () => {
  return (
    <PolarArea options={options} data={data} className="mv-2"/>
  )
}

export default PolarAreaChart