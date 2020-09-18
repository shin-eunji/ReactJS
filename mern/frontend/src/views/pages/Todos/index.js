import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from 'react-router-dom';
import List from "./List";
import Write from "./Write";
import Detail from "./Detail";
import Update from "./Update";

function Todos (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/todos'} component={List} />
                <Route path={'/todos/detail:id'} component={Detail} />
                <Route path={'/todos/write'} component={Write} />
                <Route path={'/todos/update:id'} component={Update} />
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Todos;