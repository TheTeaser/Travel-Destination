import React from 'react'

const data = require('../../data/db.json')

function Tours() {
    return (
        <div className='tour'>
            <h2>Travel list:</h2>
            {data.map((item) => {
                return (
                    <div key={item.ID}>
                        <h3 className='name'>{item.name}</h3>
                        <img src={item.image} className='image' alt={item.name}></img>
                    </div>

                )
            })}
        </div>
    )
}
export default Tours;