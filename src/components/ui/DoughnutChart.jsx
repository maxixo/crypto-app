import React, {useContext} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CoinContext } from '../../context/CoinContext';
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {

  const { transactions } = useContext(CoinContext);

  // Aggregate the transaction amounts by coin name
  const coinData = transactions.reduce((acc, transaction) => {
    if (acc[transaction.selectedCoin]) {
      acc[transaction.selectedCoin] += transaction.amount;
    } else {
      acc[transaction.selectedCoin] = transaction.amount;
    }
    return acc;
  }, {});
 // Prepare the data object for the chart
 const data = {
  datasets: [
    {
      data: Object.values(coinData), // Amounts of each coin
      backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'], // Customize this with more colors if needed
    },
  ],
  labels: Object.keys(coinData), // Coin names
};

return (
  <Doughnut 
    data={data}
    options={{
      cutout: '50%',
      plugins: {
        legend: {
          position: 'right', // Position the legend at the bottom
          labels: {
            boxWidth: 10, // Set the width of the box next to the labels
            padding: 15, // Padding around the labels
            usePointStyle: true, // Makes the legend use point styles
          } // Set to true to display the legend with coin names
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              const label = data.labels[tooltipItem.dataIndex];
              const value = data.datasets[0].data[tooltipItem.dataIndex];
              return `${label}: ${value} coins`;
            },
          },
        },
      },
    }}
  />
);
};

export default DoughnutChart;