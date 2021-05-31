import React from 'react'
import Room from './Room'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
class CreateReservation extends React.Component {

	state = {
	}

	clickedRoom = (roomId) => {
		this.setState({room_id : roomId})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.bookRoom(this.state) ? <Redirect to='/MyReservations'/> : <Redirect to='/CreateReservation'/>

	}
	changeHandler = (e) => {	
		this.setState({[e.target.name] : e.target.value})
		this.setState({reservation_number : Math.floor(Math.random() * 1000000000)})
		{this.props.currentUser.user && this.setState({user_id : this.props.currentUser.user.id})}
		
		
	}

	render = () => {
			return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<input type='date' name='check_in' onChange={this.changeHandler}/>
				<input type='date' name='check_out' onChange={this.changeHandler}/>
			{this.props.rooms.map(room => <Room key={room.id} room={room} clickedRoom={this.clickedRoom}/>)}
				<input type='submit' name='CreateReservation'/>
			</form>
		</div>
	);
	}

};

export default CreateReservation;
