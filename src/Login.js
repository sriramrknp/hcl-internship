import React, {useState, useEffect} from "react";
import Header from "./Header";

function Login() {

    const [newForm, setForm] = useState({
		Username_: "",
		Password_: "",
	});


	const [Username, setUsername] = useState("");
	const [Password, setPassword] = useState("");


	// updating the values after state changes in each input
	useEffect(() => {
		setForm({
			Username_: Username,
			Password_: Password
		});
	  }, [Username, Password]);


	function handleChangeU(event) {
		setUsername(event.target.value);
	}

	function handleChangeP(event) {
		setPassword(event.target.value);
	}

	async function handleSubmit(event) {

		// Prevent the form from being submitted.
		event.preventDefault();


		try {
			console.log(newForm);
			
			const response = await fetch('/login', {
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
		await setPassword("");

		await setForm({
			Username_: "",
			Password_: ""
		});
	}

    return (
        <div>
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