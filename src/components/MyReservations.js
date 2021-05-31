import React from 'react';
import ReservationCard from './ReservationCard'

class MyReservations extends React.Component {
    render() {
            return(
    <div>
        <h1 style={{color: 'black'}}>{this.props.currentUser.user.first_name}'s Reservations</h1>
        {this.props.myReservations.map(reservation => <ReservationCard key={reservation.id} reservation={reservation} currentUser={this.props.currentUser}/>)}
    </div>
    )
    }

}

export default MyReservations