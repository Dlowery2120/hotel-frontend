import React from 'react';

const SignUp = (props) => {
	return (
		<div>
			<h1>SignUp</h1>
			<form onSubmit={props.signUp}>
				<label>First Name:</label>
				<input type="text" />
				<br />
				<label>Last Name:</label>
				<input type="text" />
				<br />
				<label>Username:</label>
				<input type="text" />
				<br />
				<label>Password:</label>
				<input type="password" />
				<br />
				<input type="submit" />
			</form>
		</div>
	);
};

export default SignUp;
