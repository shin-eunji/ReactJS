import React from 'react';
import styled from 'styled-components';

function User (props) {

    const {
        user
    } = props;

    return (
        <Container>
            <Info>{user.name}</Info>
            <Info>{user.email}</Info>
            <Info>{user.phone}</Info>
        </Container>
    )
}

const Container = styled.div`
  padding: 10px;
  margin: 10px;
  background: #f7f8f9;
  border-bottom: 1px solid #000;
`

const Info  = styled.div`
  padding: 5px;
  font-size: 15px;
  font-weight: 500;
`;

export default User;