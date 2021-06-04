import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
class SignUp extends React.Component {
	state = {
		redirect: false
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.signUp(e) 
		this.props.logged_in ? this.props.history.push('/home') : this.props.history.push('/login')
	}
	render() {
			return (
		<div className="container">
			<div className="login">
				<h1>Sign Up</h1>
				<form onSubmit={(e)=>this.handleSubmit(e)}>
					<div className="row">
						<input type="text" required />
						<span>First Name</span>
					</div>
					<div className="row">
						<input type="text" required />
						<span>Last Name</span>
					</div>
					<div className="row">
						<input type="text" required />
						<span>Username</span>
					</div>
					<div className="row">
						<input type="password" required />
						<span>Password</span>
					</div>
					<div className="row">
						<input type="submit" value="Join"/>
					</div>
				</form>
			{this.props.logged_in ? this.props.history.push('/home'): this.props.history.push('/signup')}
			</div>
		</div>
	);
	}

};

export default withRouter(SignUp);

// <div>
// 	<h1 style={{color: 'black'}}>SignUp</h1>
// 	<form onSubmit={props.signUp}>
// 		<label>First Name:</label>
// 		<input type="text" />
// 		<br />
// 		<label>Last Name:</label>
// 		<input type="text" />
// 		<br />
// 		<label>Username:</label>
// 		<input type="text" />
// 		<br />
// 		<label>Password:</label>
// 		<input type="password" />
// 		<br />
// 		<input type="submit" />
// 	</form>
// 	{props.logged_in ? <Redirect to="/home" /> : <Redirect to="/signup"/>}
// </div>
