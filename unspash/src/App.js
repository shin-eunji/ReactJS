import React, {useState} from 'react';
import styled from 'styled-components';
import Header from "./components/Header";
import Content from "./components/Content";
import Popup from "./components/Popup";

function App (props) {

    const {} = props;

    return (
        <Container>
          <Header/>
          <Content/>
          <Popup/>
        </Container>
    )
}

const Container = styled.div`
`
export default App;