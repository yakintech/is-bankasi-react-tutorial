import React, { useState } from 'react'
import AddCity from './AddCity';
import CityList from './CityList';

function StateArraySample() {

    let citySource = ['İstanbul', 'İzmir', 'Ankara', 'Trabzon', 'Diyarbakır', 'Edirne']

    const [cities, setCities] = useState(citySource);





    const deleteCity = (item) => {
        let newCities = cities.filter(city => city != item);
        setCities(newCities);
    }

    //Butona bastığında elimizdeki cities dizisindeki state i güncelleyecek. (Yani yeni şehir ekleyeceğiz! )
    const addNewCity = (data) => {
        setCities([data, ...cities])
    }

    const emptyCities = () => {
        setCities([])
    }

    return (<>

        <AddCity addNewCity={addNewCity}></AddCity>

        <CityList cities={cities} deleteCity={deleteCity} emptyCities={emptyCities}></CityList>

    </>
    )
}

export default StateArraySample