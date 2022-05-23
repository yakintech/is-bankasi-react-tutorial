import React, { useState } from 'react'

function AddCity(props) {

    const [name, setName] = useState('');

    const add = () => {
        props.addNewCity(name)
        setName('');
    }

    return (
        <section>
            <div>
                <label>New City: </label>
                {/* Name isimli state imi aşağıdaki inputa onChange eventi aracılığıyla bağlamış oldum... */}
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <button onClick={() => add()}>Add New City</button>
            </div>
        </section>
    )
}

export default AddCity