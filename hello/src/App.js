import React from 'react';
import styled from 'styled-components';

import Header from "./components/Header";
import Content from "./components/Content";

function App (props) {

    const {} = props;

    return (
        <Container>
            <Header/>
            <Content/>
        </Container>
    )
}

const Container = styled.div`
  
`
export default App;