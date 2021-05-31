import React from 'react';
import ReservationCard from './ReservationCard'

class MyReservations extends React.Component {
    render() {
            return(
    <div>
        {this.props.reservations.map(booking => <ReservationCard key={booking.id} booking={booking} />)}
    </div>
    )
    }

}

export default MyReservations