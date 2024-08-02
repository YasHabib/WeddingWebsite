import React from 'react'

const NikkahDetails = () => {
    return (
        <div className='nikkahDetails' style={{padding: '20px'}}>
            <div className='info'>
                <h1>Nikkah</h1>
                <h4>Venue: Waterfront Park Pavilion <br /> 5225 101 St NW, Calgary, AB T3L 1S4 </h4>
                <h4>Dress Code:</h4>
                <ui>
                    Bride's and Groom's side: Pastel
                </ui>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td style={{ padding: '10px' }}>1:00pm: </td>
                            <td>Couple Shoot at Baker Park</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>2:00pm: </td>
                            <td>Guests Arrive</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>2:30pm: </td>
                            <td>Gate dhora/Date holding ceremony <br/> Groom enters after cutting ribbon</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>2:45pm: </td>
                            <td>Brides Entry with bridesmaids</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>3:00pm: </td>
                            <td>Start of Nikkah Ceremony</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>3:30pm: </td>
                            <td>Photoshoots outside with family and friends</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>4:30pm: </td>
                            <td>Dinner</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default NikkahDetails
