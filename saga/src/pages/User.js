import React, {useEffect} from 'react';
import styled from 'styled-components';
import {userActions} from "../redux/actionCreators";

function User (props) {

    useEffect(() => {
        userActions.getUsers()
    }, [])

    return (
        <Container>
            User
        </Container>
    )
}

const Container = styled.div`
`
export default User;