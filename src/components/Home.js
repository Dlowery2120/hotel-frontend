import Search from './Search'
import HotelList from '../components/HotelList';
import {withRouter} from 'react-router-dom';
import React from 'react';
class Home extends React.Component {
    render() {
            return(
    <div>
        <Search searchLocation={this.props.searchLocation} />
		<HotelList hotels={this.props.hotels} clickedHotel={this.props.clickedHotel} />
        {console.log(this.props.hotels)}
        	{this.props.logged_in ? null : this.props.history.push('/login')}
    </div>
    )
    }

}

export default withRouter(Home)