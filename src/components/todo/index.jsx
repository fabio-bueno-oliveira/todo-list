import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { todosActions } from '../../store/actions/todos';
import ToDoWrapper from './styles';

const ToDo = (props) => {

  const dispatch = useDispatch()

  useEffect(() => { 
        dispatch(todosActions.getTodos())
  }, [])

  return (
    <>
      <ToDoWrapper>
        {props.title &&
          <h1>{props.title}</h1>
        }
          {props.children}
      </ToDoWrapper>
    </>
  );
};

export default ToDo;