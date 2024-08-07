import React from 'react'

const ReceptionDetails = () => {
    return (
        <div className='receptionDetails' style={{padding: '20px'}}>
            <div className='info'>
                <h1>Reception</h1>
                <h4>Venue: Rio Banquet Hall <br /> <a href="https://maps.app.goo.gl/4jUfhR8GSCVYTnfZA" target="_blank" rel="noopener noreferrer">2850 Hopewell Pl NE, Calgary, AB T1Y 7J7</a> </h4>
                <h4>Dress Code:</h4>
                <ui>
                    Formal
                </ui>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td style={{ padding: '10px' }}>6:00pm: </td>
                            <td>Ceremony Starts</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>6:30pm: </td>
                            <td>Couple's video/slideshow plays first + Appetizers</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>7:00pm: </td>
                            <td>Welcome + Short prayer</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>7:30pm: </td>
                            <td>Speeches</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>8:00pm: </td>
                            <td>Photos</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>8:30pm: </td>
                            <td>Dinner</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>10:00pm: </td>
                            <td>Cake Cutting + Bride/Groom games</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>10:30pm: </td>
                            <td>Couple Speech</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReceptionDetails
