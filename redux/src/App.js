import React from 'react';
import styled from 'styled-components';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import {useSelector} from "react-redux";
import Popup from "./components/Popup";
import {GlobalStyle} from "./lib/Styled";
import {Route, Switch} from "react-router-dom";
import Todos from "./pages/Todos";
import Home from "./pages/Home";

function App () {


    const {popup, Sidebar} = useSelector(state => state.app)


    return (
        <Container>
            <GlobalStyle/>
            <Header/>
            {
                Sidebar && <Sidebar/>
            }
            {
                popup.title && <Popup/>
            }
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/todos'} component={Todos}/>
            </Switch>
        </Container>
    )
}
const Container = styled.div`

`

export default App;