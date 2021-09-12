import React from 'react';
import { withRouter } from "react-router-dom";
class SignUp extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.signUp(e) 
		this.props.history.push('/login')
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
			{this.props.logged_in ? this.props.history.push('/hotels'): null}
			</div>
		</div>
	);
	}

};

export default withRouter(SignUp);
