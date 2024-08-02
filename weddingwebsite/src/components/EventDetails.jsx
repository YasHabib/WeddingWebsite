import React from 'react'
import './eventdetails.css'
import HoludDetails from './HoludDetails'
import NikkahDetails from './NikkahDetails'
import ReceptionDetails from './ReceptionDetails'

function EventDetails() {
    return (
        <div>
            <div>

            </div>
            <div id='eventContainer'>
                <HoludDetails />
                <NikkahDetails/>
                <ReceptionDetails />
            </div>

        </div>
    )
}

export default EventDetails
