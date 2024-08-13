import React from 'react'
import './eventdetails.css'
import HoludDetails from './HoludDetails'
import NikkahDetails from './NikkahDetails'
import ReceptionDetails from './ReceptionDetails'
import OurStory from './OurStory'

function EventDetails() {
    return (
        <div className='detailPage'>
            <div>
                <OurStory/>
            </div>
            <div id='eventContainer'>
                    <div>
                        <HoludDetails />
                    </div>
                    <div>
                        <NikkahDetails />
                    </div>
                    <div>
                        <ReceptionDetails />
                    </div>
            </div>

        </div>
    )
}

export default EventDetails
