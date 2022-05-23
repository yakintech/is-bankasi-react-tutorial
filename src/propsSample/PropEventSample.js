import React from 'react'

function PropEventSample(props) {


    const hello = () => {
        alert('Hello React!!');
    }

    const kdvCalc = (price) => {
        alert(price * 1.18);
    }

    return (<>
        <div>
            <button onClick={hello}>Hello React</button>
            <button onClick={() => kdvCalc(500)}>KDV Calc</button>
            <button onClick={() => props.merhaba()}>Prop Merhaba Event</button>
        </div>

    </>)
}

export default PropEventSample