import React from 'react';
import ReservationCard from './ReservationCard'

class MyReservations extends React.Component {
    render() {
            return(
    <div>
        <h1 style={{color: 'black'}}>My Reservations</h1>
        {this.props.myReservations.map(reservation => <ReservationCard key={reservation.id} reservation={reservation} deleteRes={this.props.deleteRes}/>)}
    </div>
    )
    }

}

export default MyReservations