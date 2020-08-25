import React from 'react';
import styled from 'styled-components';
import Appbar from "./views/components/Appbar";
import {useSelector} from "react-redux";

function App (props) {

    const {} = props;
    
    const app = useSelector(state => state.app)
    console.log("app", app);

    return (
        <Container>
            <Appbar/>
        </Container>
    )
}

const Container = styled.div`
`
export default App;