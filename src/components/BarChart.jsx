import React, { Component } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import dataFormatter from '../dataFormatter.js';

var BarChart = (props) => {
  var chartData = {
    labels: props.data.categories,
    datasets: [
      {
        label: 'Money Spent',
        data: props.data.totals,
        backgroundColor: 'rgba(290,55,133,0.6)',
      },
    ],
  };

  return (
    <div className="chart">
      <Bar
        data={chartData}
        width={1000}
        height={500}
        options={{
          maintainAspectRatio: false,
          responsive: true,
        }}
      />
    </div>
  );
};

export default BarChart;
