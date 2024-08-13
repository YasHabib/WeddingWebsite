import React from 'react'

const ReceptionDetails = () => {
    return (
        <div className='receptionDetails' style={{padding: '20px'}}>
            <div className='info'>
                <h1>Reception</h1>
                <p>September 8th, 2024 <br/>
                Venue: Rio Banquet Hall <a href="https://maps.app.goo.gl/4jUfhR8GSCVYTnfZA" target="_blank" rel="noopener noreferrer">2850 Hopewell Pl NE, Calgary, AB T1Y 7J7</a> <br/>
                Dress Code: Formal
                </p>
                <table>
                    <tbody>
                        <tr>
                            <td style={{ padding: '10px' }}>6:00pm: </td>
                            <td>Doors open</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>6:30pm: </td>
                            <td>Appetizers</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>6:30pm: </td>
                            <td>Entrances</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>7:00pm: </td>
                            <td>Welcome Speech</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>7:15pm: </td>
                            <td>First Dance</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>7:30pm: </td>
                            <td>Speeches</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>8:00pm: </td>
                            <td>Dinner and Photos</td>
                        </tr>      
                        <tr>
                            <td style={{ padding: '10px' }}>9:30pm: </td>
                            <td>Desserts/Cake Cutting</td>
                        </tr>                    
                        <tr>
                            <td style={{ padding: '10px' }}>10:00pm: </td>
                            <td>Games/bouquet Toss</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>10:30pm: </td>
                            <td>Couple's Speech</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>10:45pm: </td>
                            <td>Open Dance Floor</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReceptionDetails
