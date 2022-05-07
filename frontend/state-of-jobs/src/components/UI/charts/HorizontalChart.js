import React from 'react';
import { Bar } from 'react-chartjs-2';

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

const HorizontalChart = (dataInput) => {
  
  const data = {
    labels: dataInput.data.map(el => el._id),
    datasets: [
      {
        data: dataInput.data.map(el => el.qtd),
        backgroundColor: '#ffae11',
        categoryPercentage: 1.0,
        barPercentage: 1.0
      }
    ]
  };

  return <Bar options={options} data={data} />;
}

export default HorizontalChart