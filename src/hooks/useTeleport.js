import {useEffect, useMemo, useState} from "react";

const api = "https://api.teleport.org/api/urban_areas";

function getItem(item) {
  return new Promise(async (resolve) => {
    if (! item) {
      resolve({status: 404, statusText: 'no url', data: null});
      return;
    }
    try {
      const resp = await fetch(item.url);
      if (resp.status === 200) {
        const json = await resp.json();
        resolve({status: 200, statusText: '', data: json, name:item.name});
      } else {
        resolve({status: resp.status, statusText: resp.statusText, data: null});
      }
    } catch (err) {
      console.log(err);
    }
    
  });
}


export default function useTeleport(urls) {
  const [data, setData] = useState([]);

  const arr = urls.map((v, i) => {
    return {
      name:v.label,
      url: `${api}/${v.value[0]}/scores/`,
    }
  });
  const str = useMemo(() => JSON.stringify(arr), [arr]);
  
  useEffect(() => {
    const items = JSON.parse(str);
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

