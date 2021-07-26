import React from 'react';
import { Redirect } from "react-router-dom";


class Hotel extends React.Component {
	state = {
		redirectOrNaw: false
	}
	handleClick = (e) => {
		{
			this.props.clickedHotel(this.props.hotel.id);
			this.setState({redirectOrNaw: !this.state.redirectOrNaw})
			console.log(this.props.hotel.id, 'clicked hotel id in Hotel')
		}
	};
    render() {
        	return (
			 	<div className="container" onClick={(e) => this.handleClick(e)}>
			 	<div className="top" style={{
			 		backgroundImage: `url(${this.props.hotel.img})`
			 	}}/>
			 
	
			 	<div className="bottom">
			 		<h1>{this.props.hotel.name}</h1>
	
			 		<h2> Address</h2>
			 		<p>{this.props.hotel.address}</p>
			 		<h2>Location</h2>
			 		<p>{this.props.hotel.location}</p>
			 		<h2>Stars</h2>
			 		<p>{this.props.hotel.stars}</p>
			 		<a className='styled-btn'>Select Hotel</a>

				
			 	</div>
			{this.state.redirectOrNaw ? <Redirect to='/CreateReservation'/> : null}
			 </div>
	);
    }

};

export default Hotel;
