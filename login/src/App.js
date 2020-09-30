import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from "react-router-dom";
import Login from "./components/Login";

function App (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/'} component={Login}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default App;