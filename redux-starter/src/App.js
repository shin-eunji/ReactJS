import React from 'react';
import styled from 'styled-components';
import Appbar from "./views/components/Appbar";
import {useSelector} from "react-redux";
import {Switch, Route} from "react-router-dom";
import User from "./views/pages/User";
import Home from "./views/pages/Home";

function App (props) {

    const {} = props;
    
    const app = useSelector(state => state.app)
    
    console.log("app", app);

    return (
        <Container>
            <Appbar/>

            <Switch>
                <Route path={"/"} component={Home} />
                <Route path={"/user"} component={User} />
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default App;