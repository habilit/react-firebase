const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'IS_FETCHING_TODOS':
            console.log('state in reducer IS_FETCHING_TODOS')
            console.log(state)
            //return state
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        case 'FETCH_TODOS':
            console.log('state FETCH_TODOS');
            console.log(state);
            return action.payload;
        default:
            return state
    }
};

export default todos;