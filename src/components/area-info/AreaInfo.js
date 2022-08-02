import React, {useEffect, useState} from "react";
import parse from 'html-react-parser';
import './AreaInfo.css';


function parseData(data) {

  return (
    data.map(v => {
      let summary = v.data.summary;
      summary = summary.replace(/<b>/g, '');
      summary = summary.replace(/<\/b>/g, '');
      summary = summary.replace(/<i>(.*?)<\/i>/g, '');
      summary = summary.replace(/<br>/g, '');
      return (
        <div key={'a-' + v.name}>
          <h3>{v.name}</h3>
          <div>{parse(summary)}</div>
        </div>
      )
    })
  );
}

export default function AreaInfo({data}) {
  
  const [info, setInfo] = useState(null);
  
  useEffect(() => {
    if (data.length > 0) {
      setInfo(parseData(data));
    }
  }, [data]);
  
  return (
    <div className={'area-info'}>{info}</div>
  )
  
}