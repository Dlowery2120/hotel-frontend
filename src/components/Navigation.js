import React from 'react';
import { withRouter } from 'react-router-dom';
// import { Nav } from 'react-bootstrap'

import { Link, Redirect } from 'react-router-dom';
const Navigation = () => {
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
					<a href='#' onClick={()=>localStorage.clear() && this.props.history.push('/login')}><Link to="/login">Sign Out</Link></a>
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
