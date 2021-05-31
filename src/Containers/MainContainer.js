import React from 'react';
import HotelList from '../components/HotelList';
import Booking from '../components/CreateReservation';

class MainContainer extends React.Component {

	render() {
		return (
			<div>
				
				<HotelList hotels={this.props.hotels} clickedHotel={this.props.clickedHotel} />
				{/* <Booking hotels={this.state.searchedHotels} rooms={this.state.hotelRooms}/> */}
			</div>
		);
	}
}

export default MainContainer;

// rooms={this.props.hotelRooms}