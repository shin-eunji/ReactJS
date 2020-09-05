import React from 'react';
import styled from 'styled-components';

import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Contact from "./components/pages/Contact";
import { Switch, Route } from "react-router-dom";
import Popup from "./components/main/Popup";
import {useSelector} from "react-redux";

function App (props) {

    const {} = props;

    const app = useSelector(state => state.app)

    return (
        <Container>
            <Switch>
                <Route path={"/"} component={Main} exact></Route>
                <Route path={"/about"} component={About} exacts></Route>
                <Route path={"/service"} component={Service}></Route>
                <Route path={"/contact"} component={Contact}></Route>
            </Switch>
            {
                app?.popup?.title &&
                <Popup title={"Lorem ipsum dolor."}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sint."}
                />
            }

        </Container>
    )
}

const Container = styled.div`
`
export default App;