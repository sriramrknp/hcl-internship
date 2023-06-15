import React, { useState, useEffect } from "react";
import Header from "./Header";

function Signup() {

	const [newForm, setForm] = useState({
		Username_: "",
		Email_: "",
		Password_: "",
		Cnf_Password_: ""
	});


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

	async function handleSubmit(event) {

		// Prevent the form from being submitted.
		event.preventDefault();


		try {
			console.log(newForm);
			
			const response = await fetch('/signup', {
				method: 'POST',
				// Adding body or contents to send
				body: JSON.stringify(newForm),
				
				// // Adding headers to the request
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			});

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
		</div>
	);
}

export default Signup;