import React from 'react';

class ReservationCard extends React.Component {
	state = {
		display: false
	}
	deleteHandler = (e) => {
		this.props.deleteRes(this.props.reservation.id)
	}
	displayForm = (e) => {
		
		this.setState({display: !this.state.display})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.updateRes(this.props.reservation, e)
		this.displayForm()
	}

	changeHandler = (e) => {
		this.setState({[e.target.name] : e.target.value})
		console.log(e.target.name, e.target.value)
	}


render() {
			return (
		<div className="container">
			<div className="top" style={{
                backgroundImage: `url(${this.props.reservation.room ? this.props.reservation.room.img : null})`
            }}/>
         
			<div className="bottom">
				<h1>Reserved</h1>
			
				<h2> Check-in date</h2>
				<p>{this.props.reservation.check_in} at 3:00 PM</p>
				<h2>Check-out date</h2>
				<p>{this.props.reservation.check_out} at 12:00 PM</p>
				<h2>Room</h2>
				<p>{this.props.reservation.room.suite}</p>
				<h2>Price</h2>
				<p>${this.props.reservation.room.price}</p>
				<h2>Reservation</h2>
				<p>{this.props.reservation.reservation_number}</p>
				{
				!this.state.display
				 ? 
				 <a className='styled-btn' onClick={(e)=>this.displayForm(e)}>Change Reservation</a>
				: 
				<div>
					<br/>
					<br/>
					<a className='styled-btn' onClick={(e)=> this.displayForm(e)}>Cancel Change</a>
					
				
				<form onSubmit={(e)=>this.handleSubmit(e)}>
					<br />
					<input type='date' name='check_in' onChange={(e)=>this.changeHandler} required></input>
					<input type='date' name='check_out' onChange={(e)=>this.changeHandler} required></input>
					<input className='styled-submit' type='submit'></input>
				</form>
				</div>
				}
				<a className='styled-btn' onClick={(e)=> this.deleteHandler(e)}>Delete</a>
			</div>
		</div>
	);
}

};

export default ReservationCard;
