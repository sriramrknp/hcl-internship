import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
    
    return (
        <span>
            {props.heading ?
                <Link
                    to="/" className="header-link">
                        <h1> AI<span>verse</span> </h1>
                </Link>
                :
                <Link to={"/" +  props.type  +"-react"} className="log-or-sin-link"> {props.name}</Link>
            }
        </span>
	);
}

export default Button;