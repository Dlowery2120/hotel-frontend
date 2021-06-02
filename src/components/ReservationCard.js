import React from 'react';

const ReservationCard = (props) => {
	const deleteHandler = (e) => {
		props.deleteRes(props.reservation.id)
	}
		return (
		<div className="container">
			<div className="top" style={{
                backgroundImage: `url(${props.reservation.room ? props.reservation.room.img : null})`
            }}/>
         
			<div className="bottom">
				<h1>The Best Hotel</h1>

				<h2> Check-in date</h2>
				<p>{props.reservation.check_in} at 3:00 PM</p>
				<h2>Check-out date</h2>
				<p>{props.reservation.check_out} at 12:00 PM</p>
				<h2>Room</h2>
				<p>{props.reservation.room.suite}</p>
				<h2>Price</h2>
				<p>${props.reservation.room.price}</p>
				<h2>Reservation</h2>
				<p>{props.reservation.reservation_number}</p>
				<a className='styled-btn'>Change Reservation</a>
				<a className='styled-btn' onClick={(e)=> deleteHandler(e)}>Delete</a>
			</div>
		</div>
	);
};

export default ReservationCard;
