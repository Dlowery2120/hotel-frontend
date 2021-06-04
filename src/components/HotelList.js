import React from 'react'
import Hotel from './Hotel'
import Room from './Room'
class HotelList extends React.Component {


    render() {
            return(

            <div id="thumbs">       
                <h1>Available Hotels</h1>
                {this.props.hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel} clickedHotel={this.props.clickedHotel} />)}
                {/* {this.clickedHotel ? this.props.rooms.map(room => <Room key={room.id} room={room}/>) : null} */}
                {console.log(this.props)}
            </div>
    
    )
    }

}

export default HotelList