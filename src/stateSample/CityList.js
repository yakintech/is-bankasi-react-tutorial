import React from 'react'

function CityList(props) {

  
  return (
    <section>
    <div>
        <ul>
            {
                props.cities && props.cities.map((item, key) => {
                    return (<>
                        <li>{item}</li><button onClick={() => props.deleteCity(item)}>Delete City</button>
                    </>)
                })
            }
        </ul>
    </div>
    <div>
        <button onClick={() => props.emptyCities()}>Empty</button>
    </div>
</section>
  )
}

export default CityList