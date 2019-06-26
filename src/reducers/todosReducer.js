
const defaultData = {
    isFetching: false,
    data: [],
};

const todos = (state = defaultData, action) => {
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
            return {
                ...state,
                isFetching: true,
            };
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        case 'FETCH_TODOS':
            console.log('state FETCH_TODOS');
            console.log(state);
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        default:
            return state
    }
};

export default todos;