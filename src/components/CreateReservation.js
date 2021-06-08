import React from 'react';
import Room from './Room';
import { withRouter } from 'react-router-dom';

class CreateReservation extends React.Component {
	state = {};

	clickedRoom = (roomId) => {
		this.setState({ room_id: roomId });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.bookRoom(this.state);
		this.props.history.push('/MyReservations')
	};
	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
		this.setState({ reservation_number: Math.floor(Math.random() * 1000000000) });
		{
			this.props.currentUser.user && this.setState({ user_id: this.props.currentUser.user.id });
		}

	};

	render = () => {
		return (
			<div>
				<h1>Create Reservation</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="date" name="check_in" onChange={this.changeHandler} />
					<input type="date" name="check_out" onChange={this.changeHandler} />
					{this.props.rooms.map((room) => <Room key={room.id} room={room} clickedRoom={this.clickedRoom} />)}
					<input className="styled-submit" type="submit" value='Confirm Reservation'></input>
				</form>
			</div>
		);
	};
}

export default withRouter(CreateReservation);
