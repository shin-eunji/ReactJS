import React from 'react';
import styled from 'styled-components';
import Counter from "./components/Counter";

function App (props) {

    const {} = props;

    return (
        <Container>
          <Counter/>
        </Container>
    )
}

const Container = styled.div`
`
export default App;