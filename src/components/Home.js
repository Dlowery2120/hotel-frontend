import Search from './Search'
import HotelList from '../components/HotelList';
import React from 'react';
class Home extends React.Component {
    render() {
            return(
    <div>
        <Search searchLocation={this.props.searchLocation} />
		<HotelList hotels={this.props.hotels} clickedHotel={this.props.clickedHotel} />
    </div>
    )
    }

}

export default Home