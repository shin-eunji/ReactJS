import React from 'react';
import styled from 'styled-components';
import Header from "../main/Header";
import Sidebar from "../main/Sidebar";
import Visual from "../main/Visual";

function Main (props) {

    const {} = props;

    return (
        <Container>
            <Header/>
            <Visual/>
            <Sidebar/>
        </Container>
    )
}

const Container = styled.div`
`
export default Main;