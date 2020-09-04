import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";

import Header from "./components/Header";
import Visual from "./pages/Home/Visual";
import Popup from "./pages/Popup";

function App (props) {

    const {} = props;

    const app = useSelector(state => state.app)
    console.log("app", app);

    return (
        <Container>
            <Header/>
            <Visual/>
            {
                app?.popup?.title &&
                <Popup title={app.popup.title}
                    description={app.popup.description}
                />
            }
        </Container>
    )
}

const Container = styled.div`
`
export default App;