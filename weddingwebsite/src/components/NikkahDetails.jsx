import React from 'react'

const NikkahDetails = () => {
    return (
        <div className='nikkahDetails' style={{padding: '20px'}}>
            <div className='info'>
                <h1>Nikkah/Akth</h1>
                <p>September 6th, 2024<br/>
                Venue: Waterfront Park Pavilion <a href="https://maps.app.goo.gl/kGXkN29pgAV87tws7" target="_blank" rel="noopener noreferrer"> 5225 101 St NW, Calgary</a> <br/>
                Dress Code: Pastel/Light colors
                </p>
                <table>
                    <tbody>
                        <tr>
                            <td style={{ padding: '10px' }}>01:00pm: </td>
                            <td>Couple's first look at Bakers park</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>03:00pm: </td>
                            <td>Guests Arrive</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>03:15pm: </td>
                            <td>Gate dhora/Gate holding ceremony <br/></td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>03:30pm: </td>
                            <td>Brides Entry with her bridesmaids</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>03:30pm: </td>
                            <td>Akth/Nikkah Ceremony</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>04:00pm: </td>
                            <td>Photoshoots outside with family and friends</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>05:00pm: </td>
                            <td>Dinner</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>07:00pm: </td>
                            <td>Bidai/Farewell Ceremony</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default NikkahDetails
