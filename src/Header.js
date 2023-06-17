import React from "react";
import Button from "./Button";

function Header({ showLogin = false, showSignup = false, showWelcome = false, userName = "" }) {

    return (
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
                    {showLogin &&
                        <Button
                            type="login"
                            name="Login"
                            heading={false}
                        />
                    }

                    {showSignup &&
                        <Button
                            type="signup"
                            name="Sign-up"
                            heading={false}
                        />
                    }

                    {showWelcome &&
                        <Button
                            type="/"
                            name={userName}
                            heading={true}
                        />
                    }
                </div>
            </div> 
        </header>
	);
}

export default Header;