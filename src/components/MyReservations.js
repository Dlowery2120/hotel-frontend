import React from 'react';
import ReservationCard from './ReservationCard'
import { withRouter} from 'react-router-dom'

class MyReservations extends React.Component {
    render() {
            return(
    <div className='myReservation'>
        {console.log('currentUser id',this.props.currentUser)}
        	{localStorage.length > 0 ? null: this.props.history.push('/login')}
        <h1>My Reservations</h1>
        {this.props.myReservations.map(reservation => <ReservationCard key={reservation.id} reservation={reservation} updateRes={this.props.updateRes} deleteRes={this.props.deleteRes}/>)}
    </div>
    )
    }

}

export default withRouter(MyReservations)