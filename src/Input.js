import React, {useState} from "react";

function Input(props) {

    const [index, setIndex] = useState(0)

    function handleIndex() {
        setIndex(index + 1);
    }

    return (
        <input
            key={handleIndex}
            type={props.type}
            name={props.name}
            id={props.id}
            placeholder={props.holder}
            className="input"
        ></input>
	);
}

export default Input;