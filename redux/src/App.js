import React from 'react';
import styled from 'styled-components';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import {connect} from "react-redux";
import Popup from "./components/Popup";
import Switch from "./components/Switch";
import {GlobalStyle} from "./lib/Styled";
import Docs from "./components/Docs";

function App (props) {

    const {
        state = {}
    } = props;


    return (
        <Container>
            <GlobalStyle/>
            <Header/>
            {
                state.openSidebar && <Sidebar/>
            }
            {
                state.popup.title && <Popup/>
            }

            <Docs code={"f-1"}
                  title={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, dolorum!"}
                  description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut commodi enim itaque, laborum nostrum quasi quos saepe similique voluptas!"}
            />
            <Docs code={"f-2"}
                  title={"Lorem ipsum dolor sit amet."}
                  description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut commodi enim itaque, laborum nostrum quasi quos saepe similique voluptas!"}/>


        </Container>
    )
}

const Container = styled.div`

`
const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = (dispatch) => ({
    dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(App);