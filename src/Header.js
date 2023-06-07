import React from "react";
import Button from "./Button";

function Header({ showLogin = false, showSignup = false }) {

    return (
        <header>
            <div className="header-parent">
                <div className="header-child1">
                    <h1> AI <span>verse</span> </h1>
                </div>
                <div className="header-child2">
                    {showLogin &&
                        <Button
                            type="login"
                            name="Login"
                        />
                    }

                    {showSignup &&
                        <Button
                            type="signup"
                            name="Sign-up"
                        />
                    }
                </div>
            </div> 
        </header>
	);
}

export default Header;