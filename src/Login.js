import React from "react";
import Input from "./Input";
import Header from "./Header";

function Login() {

    return (
        <div>
            <Header showSignup />
             
            <div className="form">
                <form action="/login" method="post">
                    <Input type="text" name="username" id="uname" holder="Username" />
                    <Input type="text" name="password" id="password" holder="Password" />
                    <button className="login-btn" type="submit">
                        <h3>Login</h3>
                    </button>
                </form>
            </div>
        </div>
	);
}

export default Login;