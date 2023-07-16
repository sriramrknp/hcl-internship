// Header component
//  handles what to display in header of the page
//  Header with showLogin displays the Login button
//  similarly for the showSignup, showWelcome and UserName.

import React from "react";
import Button from "./Button";

function Header({ showLogin = false, showSignup = false, showWelcome = false, userName = "" }) {

    return (
        <header>
            {/* // if showWelcome true, 
            //  displays only welcome with Username
            // else displays the Login and Signup buttons with logo. */}
            {showWelcome ? 
                <div className="header-parent">
                    <div className="header-child1">
                        <Button
                            type="/welcome"
                            name="AI verse"
                            heading={true}
                        />
                    </div>
                    <div className="header-child2">
                        <h3> Welcome {userName} </h3>
                    </div>
                </div>
                    
                :
                
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
                    </div>
                </div>
            }
        </header>
	);
}

export default Header;