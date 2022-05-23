import React from 'react'

function UserDetail(props) {

    return (<>
        <p>Name: {props.name}</p>
        <p>Surname: {props.surname}</p>
        <p>City: {props.city}</p>
        <p>Age: {props.age}</p>
    </>
    )
}

export default UserDetail