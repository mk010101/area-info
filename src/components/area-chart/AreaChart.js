import React, {useEffect, useState} from "react";
import {Chart as ChartJS, registerables} from 'chart.js';
import {Bar} from 'react-chartjs-2'

ChartJS.register(...registerables);


const data = {
  labels: ['london', 'ny', 'paris'],
  datasets: [],
};


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
];

const colors = [
  "rgba(255,99,132,0.5)",
  "rgba(57,17,255,0.5)",
  "rgba(106,255,233,0.5)",
  "rgba(255,247,33,0.5)",
  "rgba(255,196,9,0.5)",
  "rgba(6,112,255,0.5)",
  "rgba(207,158,255,0.5)",
  "rgba(140,255,14,0.5)",
];

for (let i = 0; i < categories.length; i++) {
  data.datasets.push({
    label: categories[i],
    backgroundColor: colors[i],
    data: [10]
  });
}

export default function AreaChart(props) {
  
  
  const [info, setInfo] = useState(data);
  
  useEffect(() => {
    if (props.data.length > 0) {
      const d = JSON.parse(JSON.stringify(data));
      
      const list = props.data;
      d.labels = [];
      d.datasets.forEach(v => v.data = []);
      
      list.forEach(v => {
        d.labels.push(v.name);
        // console.log(v.data);
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
    
  }, [props.data]);
  
  return (
    <Bar options={options} data={info}/>
  )
}