import React, {useEffect} from 'react';
import styled from 'styled-components';
import {appActions} from "../../redux/actionCreators";

function Home (props) {

    const {} = props;

    useEffect(() => {
        appActions.getUser(45)
    })

    return (
        <Container>
            Home
        </Container>
    )
}

const Container = styled.div`
`
export default Home;