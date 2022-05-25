import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function ToDoList() {

    const todos = useSelector((state) => state);
    const dispatch = useDispatch();

    const deleteToDo = (item) => {

        
        dispatch({ type: 'REMOVE_TODO', payload: item })

    }


    return (<>
        <ul>
            {
                todos && todos.map((item, key) => {
                    return <>
                        <li key={key}>{item}</li>
                        <button onClick={() => deleteToDo(item)}>Delete ToDo</button>
                    </>
                })
            }
        </ul>

    </>
    )
}

export default ToDoList