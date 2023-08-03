// Signup component,
//  renders the signup form
//  on successful signup navigates to the login page to login

import React, { useState, useEffect } from "react";
import Header from "./Header";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

function Signup() {

    const [isErr, setIsErr] = useState(false);

    // set form and update form
	const [newForm, setForm] = useState({
		Username_: "",
		Email_: "",
		Password_: "",
		Cnf_Password_: ""
	});

    // after state changes and on submission
    //  details stored in state variables
	const [Username, setUsername] = useState("");
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	const [Cnf_Password, setCnfPassword] = useState("");


	// updating the values after state changes in each input
	useEffect(() => {
		setForm({
			Username_: Username,
			Email_: Email,
			Password_: Password,
			Cnf_Password_: Cnf_Password
		});
    }, [Username, Email, Password, Cnf_Password]);


	function handleChangeU(event) {
		setUsername(event.target.value);
	}

	function handleChangeE(event) {
		setEmail(event.target.value);
	}

	function handleChangeP(event) {
		setPassword(event.target.value);
	}

	function handleChangeCp(event) {
		setCnfPassword(event.target.value);
	}

    // handles on form submission
	async function handleSubmit(event) {

		// Prevent the form from being submitted.
        event.preventDefault();
        
        if (Password !== Cnf_Password) {
            setIsErr(true);

            await setUsername("");
            await setEmail("");
            await setPassword("");
            await setCnfPassword("");

            await setForm({
                Username_: "",
                Email_: "",
                Password_: "",
                Cnf_Password_: ""
            });

            setTimeout(() => {
                setIsErr(false);
            }, 500);
        }

		try {
			const response = await fetch('https://aiverse-od3c.onrender.com/signup', {
				method: 'POST',
				// Adding body or contents to send
				body: JSON.stringify(newForm),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			});

            // response from the server
			const json = await response.json();
			console.log(json);
		} catch (error) {
			console.error(error);
		}

		await setUsername("");
		await setEmail("");
		await setPassword("");
		await setCnfPassword("");

		await setForm({
			Username_: "",
			Email_: "",
			Password_: "",
			Cnf_Password_: ""
		});
	}
	  

	return (
		<div>
			<Header showLogin />
			 
			<div className="form">
				<form  onSubmit={handleSubmit}>
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
						onChange={handleChangeE}
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						value = {Email}
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

					<input
						onChange={handleChangeCp}
						type="password"
						name="cnf-password"
						id="cnf-pass"
						placeholder="Cnf-Password"
						value = {Cnf_Password}
						className="input"
					></input>

					<button className="signup-btn" type="submit">
						<h3>Sign up</h3>
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
                        <h2> Password didn't match </h2>
                    </div>
                    <br></br><br></br>
                </div>
            </Popup>

		</div>
	);
}

export default Signup;