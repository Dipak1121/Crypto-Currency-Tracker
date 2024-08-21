import React from 'react'
import { Line } from 'react-chartjs-2'


const LineChartComponent = ({chartData, priceType, multiAxis}) => {

    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        scales: {
            x: {
              type: 'category',
            },
            crypto1: {
              beginAtZero: false,
              type: "linear",
              display: true,
              position: "left"
            },
            crypto2:{
              type: "linear",
              display: true,
              position: "right"
            }
          },
    }

  return (
    
    <Line data={chartData} options={options} />
    
  )
}

export default LineChartComponent
