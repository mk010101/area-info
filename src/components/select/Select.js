import urbanAreas from "../../areas";
import React, {useState} from "react";
import Select from "react-select";

export default function SelectArea(props) {

    const options = urbanAreas.map((v) => {
        const slug = v.href.match(/slug:[a-z-0-9()]+/gi);
        // return <option key={v.name} value={slug}>{v.name}</option>
        return {value:slug, label:v.name}
    });

    return (
            <Select
                options={options}
                isMulti={true}
                className="select-area"
            />
    );
}