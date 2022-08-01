import React, {useState} from "react";
import SelectArea from "./components/select/Select";
import AreaInfo from "./components/area-info/AreaInfo";
import useData from "./hooks/useData";

const firstArea = {
    "value": ["slug:london"],
    "label": "London",
};

function App() {

    const [selected, setSelected] = useState([firstArea]);
    const info = useData(selected);
    function selectHandler(e) {
        setSelected(e);
    }

    return (
        <div className="App">
            <h2>Area Info</h2>
            <div className={"container"}>
                <div className={"area-select"}>
                    <SelectArea
                      selectHandler={selectHandler}
                      firstSelected={firstArea}
                    />
                </div>
                <div className={"area-info"}>
                    {selected.length > 0? <AreaInfo data={info}/> : ''}
                </div>
            </div>

        </div>
    );
}

export default App;

//================================











