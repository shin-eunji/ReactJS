import React from 'react';
import styled from 'styled-components';
import Main from "./pages/Main";
import './scss/styled.scss'
import {useSelector} from "react-redux";

function App (props) {

    const {} = props;

    const state = useSelector(state => state.app)
    console.log("state", state);

    return (
        <Container>
            <Main/>
        </Container>
    )
}

const Container = styled.div`
`
export default App;