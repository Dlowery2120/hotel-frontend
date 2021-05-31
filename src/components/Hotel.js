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
		<div>
			<h4>{this.props.hotel.name}</h4>
			<img src={this.props.hotel.img} style={{ width: '200px', height: '200px' }} onClick={(e) => this.handleClick(e)}></img>
			{this.state.redirectOrNaw ? <Redirect to='/CreateReservation'></Redirect> : null}
		</div>
	);
    }

};

export default Hotel;
