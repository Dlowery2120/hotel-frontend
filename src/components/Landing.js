import React from 'react'
import {withRouter} from 'react-router-dom';

const Landing = (props) => {
    return (
        <div>
            <div>
               <h1> Bookie Landing </h1>  
            </div>
            <div>
                <p>Hotel stuff</p>
            </div>
            <div>
                <img></img>
            </div>

        </div>
    )
}

export default withRouter(Landing)