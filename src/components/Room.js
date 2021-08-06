import React from 'react';

const Room = (props) => {

	const clickHandler = (e) => {
		props.clickedRoom(props.room.id)
		console.log(props.room.id, ':room id inside Room.js')
	}
	return (
		<div className="container" >
		<div className="top" style={{
			backgroundImage: `url(${props.room.img}})`
		}}/>
	
		<div className="bottom">
			<h1>{props.room.suite}</h1>

			<h2> Room</h2>
			<p>{props.room.room_num}</p>
			<h2>Price</h2>
			<p>${props.room.price}</p>

			<a className='styled-btn' onClick={(e) => clickHandler(e)}>Select Room</a>

		</div>
	</div>
	);
};

export default Room;
