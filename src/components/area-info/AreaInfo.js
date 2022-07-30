import React from "react";
import {Chart as ChartJS, registerables} from 'chart.js';
import {Bar} from 'react-chartjs-2'

ChartJS.register(...registerables);


const $data = {
  labels: ['A', 'B', 'C'],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80]
    },
    
    {
      label: "My second dataset",
      backgroundColor: "rgba(155,231,91,0.2)",
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [45, 79, 50]
    },
    
    {
      label: "My third dataset",
      backgroundColor: "rgba(3,101,204,0.2)",
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [10, 98, 33]
    }
  ]
};

const config = {
  type: 'bar',
  //indexAxis: 'y',
};


export default function AreaInfo(props) {
  
  const list = props.data;
  //console.log(list)
  const data = {
    labels: [],
    datasets: [],
  };
  
  list.map((v) => {
    data.labels.push(v.label);
    
  });
  
  
  return (
    <Bar data={$data} options={config}/>
  )
}