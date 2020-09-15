import React from 'react';
import styled from 'styled-components';

import {Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Todos from "./pages/Todos";




function App (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/todo'} component={Todos}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default App;