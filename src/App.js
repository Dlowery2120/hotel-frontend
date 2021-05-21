import './App.css';
import React from 'react';
import Login from './components/Login.js';
import Home from './components/Home.js';
import SignUp from './components/SignUp.js';
import Navigation from './components/Navigation.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
	state = {
		isLoggedIn: false,
		users: []
	};

	getUsers = () => {
		fetch('http://localhost:3000/api/v1/users', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${localStorage.token}`
			}
		})
			.then((res) => res.json())
			.then((userData) => {
				this.setState({ users: userData });
			});
	};

	handleLogin = (e) => {
		e.preventDefault();
		console.log(e);
		let user = {
			username: e.target[0].value,
			password: e.target[1].value
		};
		console.log(user);

		let reqPackage = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(user)
		};

		fetch('http://localhost:3000/api/v1/login', reqPackage).then((res) => res.json()).then((data) => {
			localStorage.setItem('token', data.token);
			this.getUsers();
			this.setState({
				isLoggedIn: true
			});
		});
	};
	handleSignUp = (e) => {
		e.preventDefault();
		let user = {
			first_name: e.target[0].value,
			last_name: e.target[1].value,
			username: e.target[2].value,
			password: e.target[3].value
		};

		let reqPackage = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(user)
		};

		fetch('http://localhost:3000/api/v1/users', reqPackage)
			.then((res) => res.json())
			.then((data) => this.setState({ ...this.state.users, user }));
	};
	render() {
		return (
			<div className="App">
				<Router>
					<Navigation />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={SignUp} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;