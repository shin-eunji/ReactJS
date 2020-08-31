import React from 'react';
import styled from 'styled-components';
import {AiOutlinePlus} from 'react-icons/ai'

function TodoInsert (props) {

    const {} = props;

    return (
        <Container>
            <Form>
                <input type="text" placeholder={"할 일을 입력하세요"}/>
                <button type={"submit"}>
                    <AiOutlinePlus/>
                </button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
  background: #fff;
  width: 500px; 
`
const Form = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-around;
  input {
    border:none;
    width: 100%;
    padding: 10px;
  }
  button {
    position:relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffcc00;
    border:none;
    padding: 5px 10px;
    -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;
    margin: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:before {
      content: '';
      top: 0;
      left: -14px;
      position: absolute;
      width: 3px;
      height: 100%;
      -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;
      background: #eee;
    }
  }
`;
export default TodoInsert;