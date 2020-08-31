import React from 'react';
import styled from 'styled-components';

function TodoTemplate (props) {

    const {} = props;

    return (
        <Container>
            <h2>일정관리</h2>
        </Container>
    )
}

const Container = styled.div`
  width: 500px;
  background: #ffcc00;
  padding: 10px 0;
  text-align:center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  h2 {
    background: #ffcc00;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }
`
export default TodoTemplate;