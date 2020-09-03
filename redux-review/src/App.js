import React from 'react';
import styled from 'styled-components';
import Header from "./components/pages/Home/Header";
import {connect} from "react-redux";

function App (props) {

    const {
        state = {}
    } = props;

    return (
        <Container>
            <Header/>
        </Container>
    )
}

const Container = styled.div`

`

const mapStateToProps = state => ({
    state
})
const mapDispatchToProps = dispatch => ({
    dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(App);