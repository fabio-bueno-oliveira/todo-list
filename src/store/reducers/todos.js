import { todosTypes } from '../types/todos';

const initialState = {
    requesting: false,
    success: false,
    todos: [
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
            todos: [
                {
                    id: action.info.id,
                    name: action.info.name,
                    completed: action.info.completed
                },
            ],
            error: ""
        };
        case todosTypes.GET_TODOS_FAILURE:
        return {
            requesting: false,
            success: false,
            todos: [
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