import React, { useEffect, useState } from 'react'

function FetchOperationSample() {


    const [suppliers, setSuppliers] = useState([]);

    const [companyName, setCompanyName] = useState('');
    const [contactName, setContactName] = useState('');


    useEffect(() => {

        //let dataInterval = setInterval(() => {
            getData();
       // }, 10000);

        return () => {
           // clearInterval(dataInterval)
        }

    }, []);

    const getData = () => {
        //Buradaki then callback programlamada success callback e denk geliyor (jquery ajax)
        fetch("https://northwind.vercel.app/api/suppliers")
            .then(res => res.json())
            .then((data) => {
                //suppliers ile data dizilerinin karşılaştırılması
                setSuppliers(data);

            })
            .catch(err => console.log('ERROR', err))
    }


    const deleteSupplier = (id) => {

        let requestOptions = {
            method: 'DELETE'
        }

        fetch("https://northwind.vercel.app/api/suppliers/" + id, requestOptions)
            .then(res => res.json())
            .then(data => {

                //  let newSuppliers = suppliers.filter(q => q.id != id);
                //  setSuppliers(newSuppliers);
                getData();

            })
            .catch((err) => {
                console.log('/api/Suppliers/delete', err);
            })

    }


    const addNewSupplier = () => {

        let newSupplier = {
            companyName: companyName,
            contactName: contactName
        };


        //JSON.stringify js objesini json a parse etmekte.

        let requestOptions = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSupplier)
        }

        fetch("https://northwind.vercel.app/api/suppliers", requestOptions)
        .then(res => res.json())
        .then((data) => {
            getData();
        })

    }

    return (<>

        <div>
            <div>
                <label>Company Name:</label>
                <input type='text' onChange={(e) => setCompanyName(e.target.value)}/>
            </div>
            <div>
                <label>Contact Name:</label>
                <input type='text' onChange={(e) => setContactName(e.target.value)}/>
            </div>
            <div>
                <button onClick={() => addNewSupplier()}>Add</button>
            </div>
        </div>
        <h1>Count: {suppliers.length}</h1>
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
                            <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>)
}

export default FetchOperationSample