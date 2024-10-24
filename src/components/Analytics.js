// src/components/Analytics.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from 'chart.js';
import './Analytics.css'; // Import CSS

// Register the required Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

// Data for the line chart
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  datasets: [
    {
      label: 'Deals',
      data: [50, 100, 75, 150, 125, 200, 175, 250],
      borderColor: '#ff6384',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.4, // Adds smooth curves
      fill: true,
    },
    {
      label: 'Revenue',
      data: [80, 120, 95, 170, 130, 220, 195, 300],
      borderColor: '#36a2eb',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4,
      fill: true,
    },
  ],
};

// Chart options for better layout and behavior
const options = {
  responsive: true,
  maintainAspectRatio: false, // Prevents chart from being squished
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Value',
      },
      beginAtZero: true,
    },
  },
};

const Analytics = () => {
  return (
    <>
      <h1>Analytics</h1>
      <div className="analytics">
        <h3>Overview</h3>
        <div className="chart-container">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default Analytics;
