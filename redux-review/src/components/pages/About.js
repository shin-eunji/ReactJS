import React, {useEffect} from 'react';
import styled from 'styled-components';
import {userAction} from "../../redux/actionCreator";
import {useSelector} from "react-redux";

function About (props) {

    const {} = props;

    useEffect(() => {
        userAction.getUsers()
    }, [])

    const {users = []} = useSelector(state => state.user)


    return (
        <Container>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <p className={"username"}>{user.name}</p>
                            <p className={"userEmail"}>{user.email}</p>
                        </div>
                    )
                })
            }
        </Container>
    )
}

const Container = styled.div`
`
export default About;