import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/Users";

function Routes (props) {

    const {} = props;

    return (
        <Switch>
            <Route path={"/"} component={Home}/>
            <Route path={"/user"} component={User}/>
        </Switch>
    )
}

const Container = styled.div`
`
export default Routes;