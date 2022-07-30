import {useEffect, useMemo, useState} from "react";

function getItem(url) {
  return new Promise(async (resolve) => {

    const resp = await fetch(url);
    // console.log(resp)
    if (resp.status === 200) {
      const json = await resp.json();
      resolve({status: 200, statusText: '', data: json});
    } else {
      resolve({status: resp.status, statusText: resp.statusText, data: null});
    }
  });
}

const api = "https://api.teleport.org/api/urban_areas";

export default function useData(urls) {
  const [data, setData] = useState([]);
  const arr = urls.map(v => {
    return `${api}/${v.value[0]}/scores/`;
  });
  
  const str = useMemo(() => arr.join('|'), [arr]);
  
  useEffect(() => {
    const items = str.split("|");
    const infos = [];
    for (const item of items) {
      getItem(item)
        .then(res => {
          infos.push(res);
          if (items.length === infos.length) setData(infos);
        });
    }
  }, [str]);

  return data;

}
