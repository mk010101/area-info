import urbanAreas from "../../areas";
import React, {useState} from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const options = urbanAreas.map((v) => {
    const slug = v.href.match(/slug:[a-z-0-9()]+/gi);
    return {value:slug, label:v.name}
});

export default function SelectArea(props) {

    const [selectedOptions, setSelectedOptions] = useState([props.firstSelected]);
    

    function onChange(e) {
        setSelectedOptions(e);
        props.selectHandler(e);
    }

    return (
            <Select
                options={options}
                value={selectedOptions}
                isMulti={true}
                isOptionDisabled={() => selectedOptions.length >= 3}
                className="area-selector"
                onChange={onChange}
                placeholder="Select urban areas (max 3)"
            />
    );
}

SelectArea.propTypes = {
    onChange: PropTypes.func,
};