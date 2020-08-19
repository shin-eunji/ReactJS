import React, {useState} from 'react';
import styled from 'styled-components';
import Header from "./components/Header";
import Content from "./components/Content";
import Visual from "./components/Visual";

function App (props) {

    const {
    } = props;

    return (
        <Container>
          <Header/>
          <Visual/>
          <Content/>
        </Container>
    )
}

const Container = styled.div`
`
export default App;