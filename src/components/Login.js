import React from 'react';

const Login = (props) => {
    
		return (
			<div>
				<h1>Login</h1>
                <form onSubmit={props.login}> 
                    <label>Username</label>
                    <input type="text" ></input>

                    <label>Password</label>
                    <input type="password" ></input>

                    <input type="submit" ></input>
                </form>
			</div>
		);

}

export default Login