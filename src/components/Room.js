import React from 'react';

const Room = (props) => {
	const roomId = props.room.id
	const clickHandler = (e) => {
		props.clickedRoom(props.room.id)
		console.log(props.room.id, ':room id inside Room.js')
	}
	return (
		<div onClick={(e)=>clickHandler(e)}>
			<h3>Room#: {props.room.room_num}</h3>
			<h3>Price:${props.room.price}</h3>
			<h3>Suite:{props.room.suite}</h3>
			<img style={{ width: '200px', height: '200px' }} src={props.room.img} />
		</div>
	);
};

export default Room;
