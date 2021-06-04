import React from 'react';
import ReservationCard from './ReservationCard'

class MyReservations extends React.Component {
    render() {
            return(
    <div className='myReservation'>
        <h1>My Reservations</h1>
        {this.props.myReservations.map(reservation => <ReservationCard key={reservation.id} reservation={reservation} updateRes={this.props.updateRes} deleteRes={this.props.deleteRes}/>)}
    </div>
    )
    }

}

export default MyReservations