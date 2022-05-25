import React, { useState } from 'react'
import ChildComp from './ChildComp';

function ParentComp() {

    const [counter, setCounter] = useState(0);

    console.log('PARENT COMP RENDER!!');

    return (<>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Incrase</button>
        <ChildComp></ChildComp>
    </>
    )
}

export default ParentComp