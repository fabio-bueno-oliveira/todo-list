import { todosTypes } from '../types/todos';
import { todosService } from '../../api/todos';

export const todosActions = {
    getTodos: getTodos,
    toggleTodo: toggleTodo
};

function getTodos() {
    return dispatch => {
        dispatch(request());

        todosService.getTodos()
            .then(
                info => dispatch(success(info)),
                error => dispatch(failure(error.toString()))
            );
        };

    function request() { return { type: todosTypes.GET_TODOS_REQUEST } }
    function success(info) { return { type: todosTypes.GET_TODOS_SUCCESS, info } }
    function failure(error) { return { type: todosTypes.GET_TODOS_FAILURE, error } }
}

// function toggleTodo2() {
//     return dispatch => {
//         dispatch(request());

//         todosService.getTodos()
//             .then(
//                 info => dispatch(success(info)),
//                 error => dispatch(failure(error.toString()))
//             );
//         };

//     function request() { return { type: todosTypes.GET_TODOS_REQUEST } }
//     function success(info) { return { type: todosTypes.GET_TODOS_SUCCESS, info } }
//     function failure(error) { return { type: todosTypes.GET_TODOS_FAILURE, error } }
// }

function toggleTodo(id,name,completed) {
    return (dispatch) => {
        fetch(`http://localhost:4000/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id, name: name, completed: !completed
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then( (response) => {
                return response;
            })
            .then((response) => response.json())
            .then( (json) => {
                getTodos()
                console.log(59, "aa")
            });
    }
}