import { todosTypes } from '../types/todos';

const initialState = {
    requesting: false,
    success: false,
    todosList: [
        {
            id: "",
            name: "",
            completed: ""
        },
    ],
    error: ""
}

export function todosReducer(state = initialState, action) {
    switch (action.type) {
        case todosTypes.GET_TODOS_REQUEST:
        return {
            ...state,
            requesting: true
        };
        case todosTypes.GET_TODOS_SUCCESS:
        return {
            requesting: false,
            success: true,
            todosList: action.info,
            error: ""
        };
        case todosTypes.GET_TODOS_FAILURE:
        return {
            requesting: false,
            success: false,
            todosList: [
                {
                    id: "",
                    name: "",
                    completed: ""
                },
            ],
            error: "A solicitação falhou"
        };
        default:
        return state
    }
}