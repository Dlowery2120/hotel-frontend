import React from 'react';
import { useHistory } from 'react-router-dom'
import { Link, Redirect } from "react-router-dom";
const Login = (props) => {
    
		return (
            <div className="container">
			<div className="login">
				<h1>Login</h1>
				<form onSubmit={props.login}>
					<div className="row">
						<input type="text" required />
						<span>Username</span>
					</div>
					<div className="row">
						<input type="password" required />
						<span>Password</span>
					</div>
					<div className="row">
						<input type="submit" value="Login" />
					</div>
				</form>
				{props.logged_in ? <Redirect to="/home" /> : <Redirect to="/login"/>}
			</div>
		</div>
		);

}

export default Login