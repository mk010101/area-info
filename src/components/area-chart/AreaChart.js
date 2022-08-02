import React, {useEffect, useState} from "react";
import {Chart as ChartJS, registerables} from 'chart.js';
import {Bar} from 'react-chartjs-2'

ChartJS.register(...registerables);


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'left',
    },
    title: {
      display: false,
      text: 'Urban Area Stats',
    },
  },
};

const categories = [
  'Safety',
  'Housing',
  'Cost of Living',
  'Healthcare',
  'Education',
  'Economy',
  'Commute',
  'Outdoors',
  'Taxation',
];

const colors = [
  "rgba(255,99,132,0.5)",
  "rgba(122,91,255,0.5)",
  "rgba(106,255,233,0.5)",
  "rgba(179,212,255,0.5)",
  "rgba(6,112,255,0.5)",
  "rgba(255,177,14,0.5)",
  "rgba(207,158,255,0.5)",
  "rgba(140,255,14,0.5)",
  "rgba(181,181,181,0.5)",
];

function getDataSet() {
  
  const chartData = {
    labels: ['london', 'ny', 'paris'],
    datasets: [],
  };
  
  for (let i = 0; i < categories.length; i++) {
    chartData.datasets.push({
      label: categories[i],
      backgroundColor: colors[i],
      data: [10]
    });
  }
  return chartData;
}





export default function AreaChart({data}) {
  
  const [info, setInfo] = useState(null);
  
  useEffect(() => {
    if (data.length > 0) {
      const d = getDataSet();
      
      const list = data;
      d.labels = [];
      d.datasets.forEach(v => v.data = []);
      
      list.forEach(v => {
        d.labels.push(v.name);
        for (let i = 0; i < v.data.categories.length; i++) {
          const cat = v.data.categories[i];
          // console.log(cat);
          if (categories.includes(cat.name)) {
            d.datasets.forEach(v => {
              if (v.label === cat.name) {
                v.data.push(cat.score_out_of_10);
              }
            })
          }
        }
      });
      
      setInfo(d);
    }
    
  }, [data]);
  
  if (info) return (
    <Bar options={options} data={info}/>
  )
}