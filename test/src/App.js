import React from 'react';
import styled from 'styled-components';
import './scss/style.scss'
import Main from "./components/pages/main";

function App (props) {

    const {} = props;

    return (
        <Container>
            <Main/>
        </Container>
    )
}

const Container = styled.div`

`
export default App;