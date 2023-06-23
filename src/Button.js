// Button component
//  handles the links in header (which are buttons).
//  AI verse, Login and Signup

import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
    
    return (
        <span>
            {props.heading ?
                <Link
                    to="/" className="header-link">
                        <h3> AI<span>verse</span> </h3>
                </Link>
                :
                <Link to={"/" + props.type + "-react"} className="log-or-sin-link">
                    {props.name}
                </Link>
            }
        </span>
	);
}

export default Button;