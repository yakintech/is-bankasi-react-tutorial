import React from 'react'

function OneWayBinding() {

    let name = 'Çağatay Yıldız';

    let webUser = {
        name: 'Nihat',
        country: 'Turkey',
        city: 'Ankara'
    }

    return (<>
        <div>{name}</div>
        <p>{webUser.name}</p>
        <p>{webUser.country}</p>
        <p>{webUser.city}</p>
    </>)
}

export default OneWayBinding