import {todosRef} from '../firebase';
const FETCH_TODOS = 'FETCH_TODOS';
const IS_FETCHING_TODOS = 'IS_FETCHING_TODOS';

export const addToDo = newToDo => async dispatch => {
    todosRef.push().set(newToDo);
};
export const completeToDo = completeToDo => async dispatch => {
    todosRef.child(completeToDo).remove();
};
export const fetchToDos = () => async dispatch => {
    dispatch({
        type: IS_FETCHING_TODOS,
        payload: {
            isFetching: true
        }
    });
    todosRef.on("value", snapshot => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};
