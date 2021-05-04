import React from 'react'
import InputWrapper from './styles'

const Input = (props) => {
    return (
      <>
        <InputWrapper
            type='text'
            value={props.value}
            onChange={props.onChange}
        />
      </>
    );
};

export default Input;