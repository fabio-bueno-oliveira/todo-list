import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { todosActions } from '../../store/actions/todos';
import ToDoWrapper from './styles';

const ToDo = (props) => {

  const dispatch = useDispatch()

  useEffect(() => { 
    dispatch(todosActions.getTodos())
  }, [dispatch])

  const todos = useSelector(state => state.todos)

  const handleChangeStatus = (todo) => {
    dispatch(todosActions.toggleTodo(todo.id, todo.name, todo.completed))
  }

  return (
    <>
      <ToDoWrapper>
        {props.title &&
          <h1>{props.title}</h1>
        }
          <ul>
            {todos.todosList.map((todo, key) =>
              <li key={key}>
                <input 
                  type='checkbox' 
                  id={todo.id} 
                  defaultChecked={todo.completed ? true : false} 
                  onClick={() => handleChangeStatus(todo)}
                /> <label htmlFor={todo.id}>{todo.name}</label>
              </li>
            )}
          </ul>
      </ToDoWrapper>
    </>
  );
};

export default ToDo;