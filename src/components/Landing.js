import React from 'react'
import {withRouter} from 'react-router-dom';

const Landing = (props) => {
    return (
        <div>
            <div>
               <h1> Bookie </h1> 
               <h4>Make Your Reservation Now</h4> 
            </div>
            <div>
                <p>Hotel stuff</p>
            </div>
            <div>
                <img className='landing-img' src='https://images.unsplash.com/photo-1551286923-c82d6a8ae079?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80'/>
            </div>

        </div>
    )
}

export default withRouter(Landing)