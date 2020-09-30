import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from "react-router-dom";
import List from "./List";
import Write from "./Write";

function Todos (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/todos'} component={List}/>
                <Route path={'/todos/write'} component={Write}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Todos;