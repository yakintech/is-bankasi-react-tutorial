import React, { useRef } from 'react'

function RefSample() {

    //Butona tıklandığında h1 in rengi değişsin.

    let titleRef = useRef();

    const changeColor = () => {

        // document.getElementById("title").style.color = 'tomato'
        titleRef.current.style.color = 'tomato'
    }

    
    return (<>
        <h1 ref={titleRef}>Çağatay</h1>
    
        {/* <h1 id='title'>Çağatay</h1> */}
        <button onClick={() => changeColor()}>Change Color</button>
    </>)
}

export default RefSample