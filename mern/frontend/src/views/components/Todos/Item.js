import React from 'react';
import styled from 'styled-components';

function Item (props) {

    const {
        title,
        body
    } = props;

    return (
        <Container>
            <Title>{title}</Title>
            <Body>{body}</Body>
        </Container>
    )
}

const Container = styled.div`
  padding: 30px;
  background: #f1f1f1;
  margin: 10px 50px;
`
const Title = styled.div`
  font-size: 18px;
  color: #333;
  font-weight: 400;
  margin-bottom: 20px;
`;
const Body = styled.div` 
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  color: #777;
`;
export default Item;