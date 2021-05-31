import React from 'react';
import { Link, Redirect } from "react-router-dom";


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
		// <div>
		// 	<h4>{this.props.hotel.name}</h4>
		// 	<img src={this.props.hotel.img} style={{ width: '200px', height: '200px' }} onClick={(e) => this.handleClick(e)}></img>
		// 	{this.state.redirectOrNaw ? <Redirect to='/CreateReservation'></Redirect> : null}
		// </div>
			 	<div className="container" onClick={(e) => this.handleClick(e)}>
			 	<div className="top" style={{
			 		backgroundImage: `url(${this.props.hotel.img})`
			 	}}/>
			 
	
			   
			 	<div className="bottom">
			 		<h1>{this.props.hotel.name}</h1>
	
			 		<h2> Address</h2>
			 		<p> 123 Bdot Lane</p>
			 		<h2>Location</h2>
			 		<p>{this.props.hotel.location}</p>
			 		<h2>Stars</h2>
			 		<p> 4.5</p>
			 		<p>View More Details</p>

				
			 	</div>
			{this.state.redirectOrNaw ? <Redirect to='/CreateReservation'></Redirect> : null}
			 </div>
	);
    }

};

export default Hotel;
