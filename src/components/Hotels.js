import Search from './Search'
import HotelList from './HotelList';
import {withRouter} from 'react-router-dom';
import React from 'react';
class Hotels extends React.Component {
    render() {
            return(
    <div>
        <Search searchLocation={this.props.searchLocation} />
		<HotelList hotels={this.props.hotels} clickedHotel={this.props.clickedHotel} logged_in={this.props.logged_in}/>
        {console.log(this.props.hotels)}

    </div>
    )
    }

}

export default withRouter(Hotels)