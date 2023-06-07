import React, {useState} from "react";
import { Link } from "react-router-dom";

function Button(props) {

    const [index, setIndex] = useState(0)

    function handleIndex() {
        setIndex(index + 1);
    }

    return (
        <span>
            <Link key={handleIndex} to={"/" +  props.type  +"-react"} className="log-or-sin-link"> {props.name}</Link>
        </span>
	);
}

export default Button;