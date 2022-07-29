import React from "react";
// import { Chart, Bar, Category } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart, Bar } from 'react-chartjs-2'
ChartJS.register(...registerables);

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;



const data = {
    labels: ['A', 'B', 'C'],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80]
        },

        {
            label: "My second dataset",
            backgroundColor: "rgba(155,231,91,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [45, 79, 50]
        }
    ]
};

const config = {
    type: 'bar',
};



export default function AreaInfo () {
    return (
        <Bar data={data} options={config}/>
    )
}