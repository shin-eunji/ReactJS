import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App (props) {


    return (
        <Router>
            <Route path={"/"} exact component={Home}/>
            <Route path={"/:id"} component={Detail}/>
        </Router>
    )
}

const Container = styled.div`
`
export default App;