import { todosTypes } from '../types/todos';
import { todosService } from '../../api/todos';

export const todosActions = {
    getTodos: getTodos
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