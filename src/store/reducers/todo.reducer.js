const todoReducer = (state = [], action) => {

    if(action.type == 'ADD_TODO'){
        return [...state, action.payload];
    }
    else if(action.type == 'REMOVE_TODO'){
        let newTodoList = state.filter(q => q != action.payload)
        return newTodoList
    }
    else {
        return state;
    }

} 


export default todoReducer