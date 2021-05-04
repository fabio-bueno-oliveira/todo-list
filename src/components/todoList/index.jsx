import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todosActions } from '../../store/actions/todos';
import axiosClient from '../../config/axios'
import ToDoWrapper from './styles';

const ToDo = (props) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(todosActions.getTodos())
  }, [dispatch])

  const todos = useSelector(state => state.todos)

  const list = todos.todosList.sort((a, b) => b.id - a.id);

  const [newTodo, setNewTodo] = useState({
    typing: false, name: '', completed: false
  })

  const addTodo = async (name) => {
    setNewTodo({
      typing: false, name: '', completed: false
    })
    await axiosClient.post('/todos/', { id: null, name: name, completed: false })
    .then(function () {
      dispatch(todosActions.getTodos())
    })
  };

  const updateTodo = async (todo) => {
    await axiosClient.put(`/todos/${todo.id}`, { id: todo.id, name: todo.name, completed: todo.completed ? false : true })
    .then(function () {
      dispatch(todosActions.getTodos())
    })
  };

  const deleteTodo = async (id) => {
    await axiosClient.delete(`/todos/${id}`)
    .then(function () {
      dispatch(todosActions.getTodos())
    })
  };

  return (
    <>
      <ToDoWrapper>

          <header>
            <h1>{props.title}</h1>
            <button onClick={() => setNewTodo({...newTodo, typing: !newTodo.typing})}>+</button>
          </header>

          <ul>
            {newTodo.typing &&
              <li>
                <label>
                  <input type='text' value={newTodo.name} onChange={(e) => setNewTodo({...newTodo, name: e.target.value})} />
                </label>
                <button onClick={() => addTodo(newTodo.name)}>Adicionar</button>
              </li>
            }
            {list.map((todo, key) =>
              <li key={key}>
                <label htmlFor={todo.id}>
                  <input 
                    type='checkbox' 
                    id={todo.id}
                    checked={todo.completed}
                    onChange={() => updateTodo(todo)}
                    disabled={todos.requesting}
                  /> {todo.name}
                </label>
                <span className='delete' onClick={() => deleteTodo(todo.id)}>Deletar</span>
              </li>
            )}
          </ul>

      </ToDoWrapper>
    </>
  );
};

export default ToDo;