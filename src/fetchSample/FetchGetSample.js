import React, { useEffect, useState } from 'react'

function FetchGetSample() {


    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        //Buradaki then callback programlamada success callback e denk geliyor (jquery ajax)
        fetch("https://northwind.vercel.app/api/suppliers")
            .then(res => res.json())
            .then((data) => {

                setSuppliers(data);

            })
            .catch(err => console.log('ERROR', err))

    }, [])



    return (<>

        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Company Name</td>
                    <td>Contact Name</td>
                    <td>Contact Title</td>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers && suppliers.map((item, index) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>)
}

export default FetchGetSample