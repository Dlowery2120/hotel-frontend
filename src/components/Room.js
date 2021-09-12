import React from 'react';

class Room extends React.Component {

	state = {
		toggle: false
	}

	clickHandler = (e) => {
		this.props.clickedRoom(this.props.room.id);
		console.log(this.props.room.id, ':room id inside Room.js');
		this.setState({toggle: !this.state.toggle})
	};
	render() {
	return (
		<div className="container">
			<div
				className="top"
				style={{
					backgroundImage: `url(${this.props.room.img}})`
				}}
			/>

			<div className="bottom">
				<h1>{this.props.room.suite}</h1>

				<h2> Room</h2>
				<p>{this.props.room.room_num}</p>
				<h2>Price</h2>
				<p>${this.props.room.price}</p>
				{this.state.toggle ? (
					<a className="styled-btn" onClick={(e) => this.clickHandler(e)}>
						Selected
					</a>
				) : (
					<a className="styled-btn" onClick={(e) => this.clickHandler(e)}>
						Select Room
					</a>
				)}
			</div>
		</div>
	);
}
};

export default Room;
