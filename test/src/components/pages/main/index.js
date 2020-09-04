import React from 'react';
import styled from 'styled-components';
import Header from "../Header";
import Contents from "../Contents";

function Main (props) {

    const {} = props;

    return (
        <Container>
            <Header/>
            <Contents/>

        </Container>
    )
}

const Container = styled.div`
`
export default Main;