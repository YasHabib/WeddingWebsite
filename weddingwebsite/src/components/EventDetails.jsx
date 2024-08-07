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
                <div id='eventContainer'>
                    <div className="eventItem">
                        <HoludDetails />
                    </div>
                    <div className="eventItem">
                        <NikkahDetails />
                    </div>
                    <div className="eventItem">
                        <ReceptionDetails />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EventDetails
