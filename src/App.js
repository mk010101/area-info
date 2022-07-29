import React from "react";
import SelectArea from "./components/select/Select";
import AreaInfo from "./components/area-info/AreaInfo";

function App() {
  return (
    <div className="App">
      <h2>City Info</h2>
        <div className={"container"}>
            <div className={"area-select"}>
                <SelectArea/>
            </div>
            <div className={"area-info"}>
                <AreaInfo/>
            </div>
        </div>

    </div>
  );
}

export default App;
