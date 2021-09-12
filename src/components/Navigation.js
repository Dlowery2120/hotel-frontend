import React from 'react';
import { withRouter } from 'react-router-dom';

import { Link } from 'react-router-dom';
const Navigation = (props) => {
	const handleClick = (e) => {
		props.logout(e)
	}
	
	return (
		<div>
			{
			props.logged_in 
			? 
			<nav>
				<ul>
					<li>
					<a href='#'><Link to="/">Home</Link></a>
					</li>
					<li>
					<a href='#'><Link to="/hotels">Hotels</Link></a>
					</li>
					<li>
					<a href='#'><Link to="/MyReservations">My Reservations</Link></a>
					</li>
					<li>
					<a href='#' onClick={(e)=>handleClick(e)}>Sign Out</a>
					</li>
				</ul>
			</nav>
			:
			<nav>
				<ul>
					<li>
					<a href='#'><Link to="/">Home</Link></a>
					</li>
					<li>
					<a href='#'><Link to="/hotels">Hotels</Link></a>
					</li>
					<li>
					<a href='#'><Link to="/login">Login</Link></a>
					</li>
					<li>
					<a href='#'><Link to="/signup">Sign Up</Link></a>
					</li>
				</ul>
			</nav>
			}
		</div>
	);
};

export default withRouter(Navigation);
