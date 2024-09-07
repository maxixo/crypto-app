import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ transactions }) => {
  // Calculate data for the Doughnut chart based on transactions
  const coinData = transactions.reduce((acc, transaction) => {
    if (acc[transaction.name]) {
      acc[transaction.name] += transaction.amount;
    } else {
      acc[transaction.name] = transaction.amount;
    }
    return acc;
  }, {});

  const data = {
    datasets: [
      {
        label: 'Coins',
        data: Object.values(coinData),
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
      },
    ],
    labels: Object.keys(coinData),
  };

  return (
    <Doughnut 
      data={data}
      options={{
        cutout: '50%',
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
