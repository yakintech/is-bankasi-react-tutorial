import React, { useEffect, useState } from 'react'
import ChildComp from './ChildComp';

function EffectSample() {

     console.log('Effect Sample function rendered! ');

    const [sayac, setSayac] = useState(0);
    const [sayac2, setSayac2] = useState(0);



    //API den veri çekiyorum...

    //Component ilk kez çalıştığında SADECE BİR KERE çalışan kod bloğu...
    //useEffect kod bloğunda sadece boş bir dizi varsa BİR KERE ÇALIŞIR
    useEffect(() => {
        console.log('SADECE BİR KEZ ÇALIŞIR! ');
    }, []);


    useEffect(() => {
        console.log('Sadece sayac2 state değiştiğinde çalışır!');
    }, [sayac2]);



    return (<>
        {/* <ChildComp></ChildComp> */}
        <div>
            <h1>{sayac}</h1>
            <button onClick={() => setSayac(sayac + 1)}>Sayaç Arttır</button>
        </div>
        <div>
            <h1>{sayac2}</h1>
            <button onClick={() => setSayac2(sayac2 + 1)}>Sayaç - 2 Arttır</button>

        </div>

    </>)
}

export default EffectSample