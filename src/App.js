import React, {useState} from "react";
import SelectArea from "./components/select/Select";
import AreaChart from "./components/area-chart/AreaChart";
import useTeleport from "./hooks/useTeleport";
import AreaInfo from "./components/area-info/AreaInfo";

const firstArea = {
  "value": ["slug:london"],
  "label": "London",
};

function App() {
  
  const [selected, setSelected] = useState([firstArea]);
  const info = useTeleport(selected);
  
  function selectHandler(e) {
    setSelected(e);
  }
  
  return (
    <div className="App">
      <h2>Urban Area Stats</h2>
      <div className={"container"}>
        <div className={"area-select"}>
          <SelectArea
            selectHandler={selectHandler}
            firstSelected={firstArea}
          />
            {selected.length > 0 ? <AreaInfo data={info}/> : ''}
        </div>
        <div className={"area-chart"}>
          {selected.length > 0 ? <AreaChart data={info}/> : 'Please select up to 3 places.'}
        </div>
      </div>
    
    </div>
  );
}

export default App;

//================================







