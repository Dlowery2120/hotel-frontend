import React from 'react';
// import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<div>
			<nav className='navigation-bar'>
					<a href='#' style={{color: 'white'}}><Link to="/home">Home</Link></a>
					<a href='#' style={{color: 'white'}}><Link to="/login">Login</Link></a>
					<a href='#' style={{color: 'white'}}><Link to="/signup">Sign Up</Link></a>
					<a href='#' style={{color: 'white'}}><Link to="/MyReservations">My Reservations</Link></a>
					<a href='#' style={{color: 'white'}}><Link to="/signout">Sign Out</Link></a>
			</nav>
		</div>
	);
};

export default Navigation;
