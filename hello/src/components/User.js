import React from 'react';
import styled from 'styled-components';

function User (props) {

    const {
        user
    } = props;

    console.log("user", user);

    return (
        <Container>
            <Info>{user.name}</Info>
            <Info>{user.email}</Info>
            <Info>{user.phone}</Info>
        </Container>
    )
}

const Container = styled.div`
  margin: 10px 0;
  background-color: #efefef;
  padding: 10px;
`
const Info = styled.div`
    font-weight: 500;
    color: #666;
    margin-bottom: 10px;
`;
export default User;