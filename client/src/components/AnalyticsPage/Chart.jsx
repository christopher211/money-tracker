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
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Money by Month',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const expenseData = [
  "2000",
  "3000",
  "1000",
  "5000",
  "2000",
  "8000",
  "9000",
]

export const data = {
  labels,
  datasets: [
    {
      label: 'Expense',
      data: expenseData,
      backgroundColor: 'rgba(237, 107, 90)',
    },
    {
      label: 'Income',
      data: labels.map(() => 500),
      backgroundColor: 'rgba(51, 124, 160)',
    },
  ],
};

function Chart() {
  return <Bar options={options} data={data} />;
}

export default Chart