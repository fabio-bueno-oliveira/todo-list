import React from 'react';
import ToDoWrapper from './styles';

const ToDo = (props) => {
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