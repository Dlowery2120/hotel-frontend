import React from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Hotel extends React.Component {
	state = {
		toggleRedirect: false
	};
	handleClick = (e) => {
		{
			this.props.clickedHotel(this.props.hotel.id);
			this.setState({ toggleRedirect: !this.state.toggleRedirect });
			console.log(this.props.hotel.id, 'clicked hotel id in Hotel');
		}
	};
	pushToLogin = (e) => {
		{this.props.history.push('/login')}
	}
	
	render() {
		return (
			<div className="container" >
				<div
					className="top"
					style={{
						backgroundImage: `url(${this.props.hotel.img})`
					}}
					/>

				<div className="bottom">
					<h1>{this.props.hotel.name}</h1>

					<h2> Address</h2>
					<p>{this.props.hotel.address}</p>
					<h2>Location</h2>
					<p>{this.props.hotel.location}</p>
					<h2>Stars</h2>
					<p>{this.props.hotel.stars}</p>
					{
					this.props.logged_in ? 
					<a className="styled-btn" onClick={(e) => this.handleClick(e)}>Select Hotel</a> 
					:
					<a className="styled-btn" onClick={(e) => this.pushToLogin(e)}>Select Hotel</a>
					}
				</div>
				{this.state.toggleRedirect ? <Redirect to="/CreateReservation" /> : null}
			</div>
		);
	}
}

export default withRouter(Hotel);
