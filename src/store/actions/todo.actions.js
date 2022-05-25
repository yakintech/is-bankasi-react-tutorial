

export const addToDo = (data) => {

    return {
        type : 'ADD_TODO',
        payload: data
    }

}


export const removeToDo = (data) => {
    return {
        type: 'REMOVE_TODO',
        payload: data
    }
}



