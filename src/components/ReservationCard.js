import React from 'react';

const ReservationCard = (props) => {
	return (
		//     <div>
		//         <h1>My Reservations</h1>
		// <table style={{width:"100%"}}>
		//   <tr >
		//     <th style={{width: '12%'}}>Name</th>
		//     <th style={{width: '12%'}}>Reservation</th>
		//     <th style={{width: '12%'}}>Check-in</th>
		//     <th style={{width: '12%'}}>Check-out</th>
		//     <th style={{width: '12%'}}>Suite</th>
		//     <th style={{width: '12%'}}>Price</th>
		//     <th style={{width: '12%'}}>Room</th>
		//   </tr>
		//   <tr>
		//     <td style={{width: '12%'}}>{props.currentUser.user.first_name} {props.currentUser.user.last_name}</td>
		//     <td style={{width: '12%'}}>{props.reservation.reservation_number}</td>
		//     <td style={{width: '12%'}}>{props.reservation.check_in}</td>
		//     <td style={{width: '12%'}}>{props.reservation.check_out}</td>
		//     <td style={{width: '12%'}}>{props.reservation.room.suite}</td>
		//     <td style={{width: '12%'}}>${props.reservation.room.price}</td>
		//     <td style={{width: '12%'}}>{props.reservation.room.room_num}</td>
		//   </tr>
		// </table>
		//     </div>
		<div className="container">
			<div className="top" style={{
                backgroundImage: `url(${props.reservation.room.img})`
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
			
			</div>
		</div>
	);
};

export default ReservationCard;
