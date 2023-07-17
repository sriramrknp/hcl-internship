// Login Component
//  this component is rendered on path "login-react"
//  takes user data and if registered, user will be redirected 
//  to the games.

import React, { useState, useEffect } from "react";
import Header from "./Header";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

function Login() {

    // Hooks to set the form, update the form,
    //  set variables, update variables and etc.
    const [newForm, setForm] = useState({
		Username_: "",
		Password_: "",
	});
	const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [isErr, setIsErr] = useState(false);


	// updating the values after state changes in each input
	useEffect(() => {
		setForm({
			Username_: Username,
			Password_: Password
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
			
			const response = await fetch('https://aiverse-od3c.onrender.com/login', {
				method: 'POST',
				// Adding body or contents to send
				body: JSON.stringify(newForm),
				headers: {
					"Content-type": "application/json"
				}
			});

            // response from the server
            const json = await response.json();
            if (await json.res === "Login Success") {
                localStorage.setItem("currentUser", Username);
                window.location.replace("/welcome");
            } else {
                setIsErr(true);

                setUsername("");
                setPassword("");

                setForm({
                    Username_: "",
                    Password_: ""
                });

                setTimeout(() => {
                    setIsErr(false);
                }, 800);
            }
		} catch (error) {
			console.error(error);
        }
	}

    return (

        <div>
            {/* // On successful login user will be redirected to the welcome page */}
            

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

            <Popup
                open={isErr} closeOnEscape={false}
                closeOnDocumentClick={false} 
            >
                <div className="modal-parent">
                    <br></br><br></br>
                    <div className="modal-child1">
                        <h2> Invalid Credentials </h2>
                    </div>
                    <br></br><br></br>
                </div>
            </Popup>
            

        </div>
	);
}

export default Login;