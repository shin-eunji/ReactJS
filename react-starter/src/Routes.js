import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";

function Routes (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/'} component={}></Route>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;