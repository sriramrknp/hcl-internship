import React from "react";
import Button from "./Button";
import Content from "./Content";
import { useLocation } from "react-router-dom";


function Welcome() {
    const { state } = useLocation();
    const data = state.userName;
    console.log(data);

    return (
        <>
            <header>
                <div className="header-parent">
                    <div className="header-child1">
                        <Button
                            type="/"
                            name="AI verse"
                            heading={true}
                        />
                    </div>
                    <div className="header-child2">
                        <h3> Welcome {data} </h3>
                    </div>
                </div>
            </header>
            <Content onLogin />
        </>

    );
}

export default Welcome;