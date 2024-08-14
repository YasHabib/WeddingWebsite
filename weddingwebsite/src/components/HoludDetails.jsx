import React from 'react'

const HoludDetails = () => {
    return (
        <div className='holudDetails' style={{padding: '20px'}}>
            <div className='info'>
                <h1>Holud</h1>
                <p>September 5th, 2024 <br/>
                Venue: Marlborough Park Community Association <a href="https://www.google.com/maps/search/?api=1&query=6021%20Madigan%20Dr%20NE,%20Calgary,%20AB%20T2A%205G9" 
                                                                                target="_blank" rel="noopener noreferrer">6021 Madigan Dr NE, Calgary, AB T2A 5G9</a> <br/>
                Dress Code: Brides side - Pink, Grooms side - Green                    
                </p>
                <table>
                    <tbody>
                        <tr>
                            <td style={{ padding: '10px' }}>06:30pm: </td>
                            <td>Photoshoots with bridesmaids and groomsmens</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>07:00pm: </td>
                            <td>Grooms entry and Brides entry</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>07:30pm: </td>
                            <td>Gaye Holud Ceremony begins</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>08:00pm: </td>
                            <td>Dinner starts</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>09:30pm: </td>
                            <td>Gaye Holud Ceremony Wraps Up</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>09:45pm: </td>
                            <td>Dance Performances</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>10:30pm: </td>
                            <td>DJ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HoludDetails
