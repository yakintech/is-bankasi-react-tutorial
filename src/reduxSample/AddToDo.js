import React, { useState } from 'react'
import { act } from 'react-dom/test-utils';
import { useDispatch } from 'react-redux';

function AddToDo() {

    const [todoName, setTodoName] = useState('');

    const dispatch = useDispatch();


    const add = () => {

        let action = {
            type: 'ADD_TODO',
            payload: todoName
        }

        dispatch(action);

    }

  return (
    <div>

        <input type='text' onChange={(e) => setTodoName(e.target.value)}></input>
        <button onClick={() => add()}>Add ToDo</button>

    </div>
  )
}

export default AddToDo