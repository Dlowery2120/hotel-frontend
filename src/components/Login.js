import React from 'react';
import { useHistory } from 'react-router-dom'
import { Link, Redirect } from "react-router-dom";
const Login = (props) => {
    
		return (
			<div>
				<h1>Login</h1>
                <form onSubmit={props.login}> 
                    <label>Username</label>
                    <input type="text" ></input>

                    <label>Password</label>
                    <input type="password" ></input>

                    <input type="submit"></input>
                </form>
                {props.logged_in ? <Redirect to="/home" /> : <Redirect to="/login"/>}
			</div>
		);

}

export default Login