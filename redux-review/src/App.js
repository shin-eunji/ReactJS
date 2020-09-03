import React from 'react';
import styled from 'styled-components';
import Header from "./components/Header";
import {useDispatch, useSelector} from "react-redux";

function App (props) {

    const {} = props;

    const app = useSelector(state => state.app)

    console.log("app", app);

    return (
        <Container>
            <Header/>
        </Container>
    )
}

const Container = styled.div`
  height: 4000px;
`
export default App;