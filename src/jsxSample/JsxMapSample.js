import React from 'react'

function JsxMapSample() {

    let cities = ['İstanbul', 'Ankara', 'İzmir', 'Trabzon']


    return (<>
        <ul>
            {
                cities.map((element) => {

                    return <li>{element}</li>

                })
            }
        </ul>
    </>
    )
}

export default JsxMapSample