import React from 'react';
import styled from 'styled-components';
import cn from 'classnames'

function Item (props) {

    const {
        title,
        description,
        isCompleted
    } = props;

    return (
        <Container className={cn("item", {isCompleted})}>
            <h2>{title}</h2>
            <p>{description}</p>
        </Container>
    )
}

const Container = styled.div`
  background: #fff;
  padding: 30px;
  margin: 10px 20px;
  &.isCompleted {
      h2 {
        text-decoration: line-through;
        color: #333;
      }
  }
  h2 {
    font-size: 20px;
    margin-bottom: 6px;
    color: #00b7bc;
    
  }
  p {
    font-size: 17px;
    color: #777;
    line-height: 1.3;
  
  }
`
export default Item;