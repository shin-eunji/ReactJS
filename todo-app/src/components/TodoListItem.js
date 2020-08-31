import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {AiOutlineDelete, AiOutlineBorder, AiOutlineDownSquare} from 'react-icons/ai'

function TodoListItem (props) {

    const {
        todo
    } = props;

    const {text, checked} = todo;

    return (
        <Container>
            <div className={cn("checkbox", {checked})}>
                {checked ? <AiOutlineBorder/> : <AiOutlineDownSquare/>}
            </div>
            <p>{text}</p>
            <button>
                <AiOutlineDelete/>
            </button>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  p {
    width: 100%;
    margin-left: 10px;
    font-size: 16px;
    color: #333;
    
  }
  .checkbox {
    cursor: pointer;
    AiOutlineBorder {
      
    }
  }
  button {
    font-size: 20px;
    font-weight: 500;
    color: #ff0000;
    border:none;
    background:none;
    cursor: pointer;
  }
`

export default TodoListItem;