import React from 'react'
import InputWrapper from './styles'

const Checkbox = (props) => {
    return (
      <>
        <InputWrapper
            type='checkbox'
            id={props.id}
            checked={props.checked}
            onChange={props.onChange}
            disabled={props.disabled}
        />
      </>
    );
};

export default Checkbox;