import React, { useState } from 'react'



function SayacSample() {

    console.log('Sayaç sample component rendered!');

    //sayac aşağıda kullanacağım değişkendir.
    //setSayac bu değişkeni değiştirecek FONKSİYON!
    //useState içerisindeki 0 ise default value;
    const [sayac, setSayac] = useState(0);

    const sayacArttir = () => {
       setSayac(sayac + 1)
    }

    return (<>
        <h1>{sayac}</h1>
        <button onClick={() => sayacArttir()}>Arttır</button>
    </>
    )
}

export default SayacSample