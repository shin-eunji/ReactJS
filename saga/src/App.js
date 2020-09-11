import React from 'react';
import styled from 'styled-components';
import './scss/styled.scss'

import {useSelector} from "react-redux";
import {Switch, Route} from 'react-router-dom'

import Main from "./pages/Main";
import User from "./pages/User";

function App (props) {

    const {} = props;

    const state = useSelector(state => state.app)
    console.log("state", state);

    return (
        <Container>
            <Switch>
                <Route exact path={'/'} component={Main}/>
                <Route exact path={'/user'} component={User}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default App;