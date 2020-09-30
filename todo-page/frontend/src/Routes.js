import React from 'react';
import styled from 'styled-components';
import Todos from "./views/pages";
import {Switch, Route} from "react-router-dom";
import Home from "./views/pages/Home";

function Routes (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/todos'} component={Todos}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;