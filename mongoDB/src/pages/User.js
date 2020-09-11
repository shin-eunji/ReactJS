import React, {useEffect} from 'react';
import styled from 'styled-components';
import {userActions} from "../redux/actionCreators";
import {useSelector} from "react-redux";

function User (props) {

    useEffect(() => {
        const action = userActions.getUsers()
    }, [])

    const {users = []} = useSelector(state => state.user);


    return (
        <Container>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                        </div>
                    )
                })
            }
        </Container>
    )
}

const Container = styled.div`
`
export default User;