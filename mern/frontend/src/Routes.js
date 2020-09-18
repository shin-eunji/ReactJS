import React from 'react';
import styled from 'styled-components';
import {Route, Switch, Redirect} from "react-router-dom";
import Home from "./views/pages/Home";
import Todos from "./views/pages/Todos";

function Routes (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/todos'} component={Todos} />
                <Redirect from={'/'} to={'/home'} />
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;