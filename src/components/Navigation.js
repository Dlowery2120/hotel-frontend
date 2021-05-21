import React from 'react';
// import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<div>
			<nav>
					<h3>Logo</h3>
				<ul>
					<Link to="/"><li>Home</li></Link>
					<Link to="/login"><li>Login</li></Link>
					<Link to="/signup"><li>Sign Up</li></Link>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
