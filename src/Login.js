// Login Component
//  this component is rendered on path "login-react"
//  takes user data and if registered, user will be redirected 
//  to the games.

import React, { useState, useEffect } from "react";
import Header from "./Header";
import {Navigate} from "react-router-dom";

function Login() {

    // Hooks to set the form, update the form,
    //  set variables, update variables and etc.
    const [newForm, setForm] = useState({
		Username_: "",
		Password_: "",
	});
	const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginUsername, setLoginUsername] = useState({
        userName: ""
    });


	// updating the values after state changes in each input
	useEffect(() => {
		setForm({
			Username_: Username,
			Password_: Password
        });
        setLoginUsername({
            userName: Username
        });
	  }, [Username, Password]);


    // after username and password being entered
    //  those are stored in state variables
    //  to send to the server
    function handleChangeU(event) {
		setUsername(event.target.value);
	}

	function handleChangeP(event) {
		setPassword(event.target.value);
	}

	async function handleSubmit(event) {

		// Prevent the form from being submitted.
		event.preventDefault();

        // POST request to the sever
		try {
			console.log(newForm);
			
			const response = await fetch('/login', {
				method: 'POST',
				// Adding body or contents to send
				body: JSON.stringify(newForm),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			});

            // response from the server
            const json = await response.json();
            if (await json.res === "Login Success") {
                console.log(loginUsername);
                setLoginSuccess(true);
            } else {
                // reset the form
                setUsername("");
                setPassword("");

                setForm({
                    Username_: "",
                    Password_: ""
                });
            }
		} catch (error) {
			console.error(error);
        }
	}

    return (

        <div>
            {/* // On successful login user will be redirected to the welcome page */}
            {loginSuccess && 
                <Navigate to="/welcome" state={loginUsername} />
            }
            <Header showSignup />
             
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleChangeU}
                        type="text"
                        name="username"
                        id="uname"
                        placeholder="Username"
                        value = {Username}
                        className="input"
                    ></input>

                    <input
                        onChange={handleChangeP}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={Password}
                        className="input"
                    ></input>
                    
                    <button className="login-btn" type="submit">
                        <h3>Login</h3>
                    </button>
                </form>
            </div>
        </div>
	);
}

export default Login;