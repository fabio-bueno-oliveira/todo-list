import styled from 'styled-components'

const ToDoWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: -14px 14px 38px -23px rgba(0,0,0,1);
  display: flex;
  flex-direction: column;
  min-height: 500px;
  padding: 0;
  position: relative;
  width: 500px;

  header {
    align-items: center;
    background-color: #2980b9;
    display: flex;
    width: 100%;
    margin: 0;

    h1 {
      color: #fff;
      margin: 10px 16px;
      flex-grow: 2;   
    }

    button {
      background: transparent;
      border: none;
      color: #fff;
      cursor: pointer;
      flex-grow: 0;
      font-size: 38px;
      height: fit-content;
      margin: 0 14px 0 0;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    
    li {
      display: flex;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
      :nth-child(odd) { background: #f7f7f7; }

      label {
        display: block;
        cursor: pointer;
        padding: 16px 18px;
        flex-grow: 2;
      }

      input[type=checkbox] {
        /* Double-sized Checkboxes */
        -ms-transform: scale(1.5); /* IE */
        -moz-transform: scale(1.5); /* FF */
        -webkit-transform: scale(1.5); /* Safari and Chrome */
        -o-transform: scale(1.5); /* Opera */
        transform: scale(1.5);
      }

      input[type=text]  {
        border: 1px silver solid;
        padding: 10px;
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen';
        width: 300px;
      }

      button {
        background-color: transparent;
        border: none;
        color: #2980b9;
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen';
        font-size: 18px;
        font-weight: 500;
        margin-left: 4px;
        padding: 10px 16px;
      }

      .delete {
        color: grey;
        cursor: pointer;
        display: none;
        flex-grow: 0;
        margin-right: 16px;
        padding: 6px;
      }

      &:hover {
        .delete {
          display: block;
        }
      }
    }
  }
`

export default ToDoWrapper;