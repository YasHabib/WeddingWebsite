import React from 'react'

const HoludDetails = () => {
    return (
        <div className='holudDetails' style={{padding: '20px'}}>
            <div className='info'>
                <h1>Holud</h1>
                <h4>Venue: Marlborough Park Community Association <br />   <a href="https://www.google.com/maps/search/?api=1&query=6021%20Madigan%20Dr%20NE,%20Calgary,%20AB%20T2A%205G9" 
                                                                                target="_blank" rel="noopener noreferrer">6021 Madigan Dr NE, Calgary, AB T2A 5G9</a> </h4>
                <h4>Dress Code:</h4>
                <ui>
                    Grooms side: Light Green <br />
                    Brides side: Light Pink
                </ui>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td style={{ padding: '10px' }}>6:00pm: </td>
                            <td>Couple shoot: couple and friends in same outfits</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>7:00pm: </td>
                            <td>Yasin's entry with his siblings and friends</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>7:15pm: </td>
                            <td>Farhana's entry with her siblings and friends</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>7:30pm: </td>
                            <td>Gaye Holud Ceremony with Parents</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>7:30pm: </td>
                            <td>Dinner</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>8:00pm: </td>
                            <td>Gaye Holud Ceremony with other guests</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>9:30pm: </td>
                            <td>Gaye Holud Ceremony Wraps Up</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>10:00pm: </td>
                            <td>Choreographed dance starts</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>10:30pm: </td>
                            <td>Open Dance Floor</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HoludDetails
