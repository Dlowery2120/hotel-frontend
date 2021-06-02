import './App.css';
import React from 'react';
import Login from './components/Login.js';
import MainContainer from './Containers/MainContainer.js';
import SignUp from './components/SignUp.js';
import Navigation from './components/Navigation.js';
import CreateReservation from './components/CreateReservation.js';
import MyReservations from './components/MyReservations.js';
import Home from './components/Home.js';

import WelcomeHeader from './components/WelcomeHeader';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
	state = {
		isLoggedIn: false,
		users: [],
		allHotels: [],
		allRooms: [],
		searchedHotels: [],
		hotelRooms: [],
		bookings: [],
		currentUser: {},
		myReservations: []
	};

	componentDidMount = () => {
		fetch('http://localhost:3000/api/v1/hotels', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
			.then((res) => res.json())
			.then((hotelData) => {
				this.setState({ allHotels: hotelData });
			});
		fetch('http://localhost:3000/api/v1/rooms', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
			.then((res) => res.json())
			.then((roomData) => {
				this.setState({ allRooms: roomData });
			});
		fetch('http://localhost:3000/api/v1/bookings', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
			.then((res) => res.json())
			.then((bookingData) => {
				this.setState({ bookings: bookingData });
			});
	};

	bookRoom = (bookingObj) => {
		console.log(bookingObj, 'bookingObj before post in App.js');
		const reqPackage = {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(bookingObj)
		};
		fetch('http://localhost:3000/api/v1/bookings', reqPackage).then((res) => res.json()).then((newBooking) => {
			this.setState({ myReservations: [ ...this.state.myReservations, newBooking ] });
			console.log(newBooking, 'newBooking after post in App.js');
		});
	};

	renderSearch = (searchWords) => {
		this.setState({ searchedHotels: this.state.allHotels.filter((hotel) => hotel.location.includes(searchWords)) });
	};

	clickedHotel = (singleHotelId) => {
		this.setState({ hotelRooms: this.state.allRooms.filter((rooms) => rooms.hotel_id === singleHotelId) });
		console.log(singleHotelId, 'clickedHotelId inside App.js');
	};
	// myReservations = () => {
	// 	this.setState({myReservations: this.state.bookings.filter((booking) => booking.user_id === this.state.currentUser.user.id )})
	// }
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
			this.setState({
				currentUser: data,
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

	deleteRes = (deletedReservation) => {
		fetch(`http://localhost:3000/api/v1/bookings/${deletedReservation}`, {
			method: 'DELETE'
	})
	.then(()=>{
		this.setState({
		  myReservations: [...this.state.myReservations.filter(reservation => reservation.id !== deletedReservation)]
		})
	  })

	console.log(deletedReservation)
			
	}
	render() {
		return (
			<div className="App">
				<Router>
					<Navigation />
					{/* <WelcomeHeader /> */}

					<Switch>
						<Route
							exact
							path="/"
						/>
						<Route
							exact
							path="/home"
							render={(props) => (
								<Home
									currentUser={this.state.currentUser}
									searchLocation={this.renderSearch}
									hotels={this.state.searchedHotels}
									clickedHotel={this.clickedHotel}
								/>
							)}
						/>
						<Route
							path="/login"
							render={(props) => <Login login={this.handleLogin} logged_in={this.state.isLoggedIn} />}
						/>
						<Route path="/signup" render={(props) => <SignUp signUp={this.handleSignUp} />} />
						<Route
							path="/CreateReservation"
							render={(props) => (
								<CreateReservation
									hotels={this.state.searchedHotels}
									rooms={this.state.hotelRooms}
									bookRoom={this.bookRoom}
									currentUser={this.state.currentUser}
								/>
							)}
						/>
						<Route
							path="/MyReservations"
							render={(props) => (
								<MyReservations
									myReservations={this.state.myReservations}
									currentUser={this.state.currentUser}
									deleteRes={this.deleteRes}
								/>
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
