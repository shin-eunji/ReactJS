import React from 'react';
import styled from 'styled-components';
import MainUser from "./main/Contents/MainUser";
import MainNotice from "./main/Contents/MainNotice";
import MainSearch from "./main/Contents/MainSearch";

function Contents (props) {

    const {} = props;

    return (
        <Container>
            <MainUser/>
            <MainNotice/>
            <MainSearch/>
        </Container>
    )
}

const Container = styled.div`
`
export default Contents;