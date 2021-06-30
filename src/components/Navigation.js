import React from 'react';
import { withRouter } from 'react-router-dom';

import { Link } from 'react-router-dom';
const Navigation = (props) => {
	const handleClick = (e) => {
		props.logout(e)
	}
	
	return (
		<div>
			<nav>
				<div class="logo">
					<h2>Bookie</h2>
				</div>

				<ul>
					<li>
					<a href='#'><Link to="/home">Home</Link></a>
					</li>
					<li>
					<a href='#'><Link to="/MyReservations">My Reservations</Link></a>
					</li>
					<li>
					<a href='#'><Link to="/login">Login</Link></a>
					</li>
					<li>
					<a href='#'><Link to="/signup">SignUp</Link></a>
					</li>
					<li>
					<a href='#' onClick={(e)=>handleClick(e)}>Sign Out</a>
					</li>
				</ul>
				<div class="menu-bars" id="toggle">
					<input type="checkbox" />
					<span />
					<span />
					<span />
				</div>
			</nav>
		</div>
	);
};

export default withRouter(Navigation);
