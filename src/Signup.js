import React from "react";
import Input from "./Input";
import Header from "./Header";

function Signup() {

    return (
        <div>
            <Header showLogin />
             
            <div className="form">
                <form action="/signup" method="post">
                    <Input type="text" name="username" id="uname" holder="Username" />
                    <Input type="text" name="name" id="name" holder="Name" />
                    <Input type="text" name="email" id="email" holder="Email" />
                    <Input type="text" name="password" id="password" holder="Password" />
                    <Input type="text" name="cnf-password" id="cnf-pass" holder="Cnf-Password" />
                    <button className="signup-btn" type="submit">
                        <h3>Sign up</h3>
                    </button>
                </form>
            </div>
        </div>
	);
}

export default Signup;