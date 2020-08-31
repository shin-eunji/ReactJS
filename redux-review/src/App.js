import React from 'react';
import styled from 'styled-components';
import './scss/style.scss'
import {Provider} from 'redux'

// import Counter from "./components/Counter";
// import Todos from "./components/Todos";

function App (props) {

    const {} = props;

    return (
        <Container>
            <Counter number={0}/>
            <hr />
            <Todos/>
        </Container>
    )
}

const Container = styled.div`
`
export default App;