import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Sênior', 'Pleno', 'Júnior', 'Não Informado'],
  datasets: [
    {
      label: '# of Votes',
      data: [25, 12, 3, 5],
      backgroundColor: [
        '#dc6788',
        '#dcd267',
        '#67b7dc',
        '#67dc75',
      ]
    },
  ],
};

export const options = {
  cutout: '80%'
}

const DoughnutChart = () => {
  return (
    <Doughnut options={options} data={data} className="mv-2"/>
  )
}

export default DoughnutChart