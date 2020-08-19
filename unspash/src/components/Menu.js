import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

function Menu (props) {

    const {} = props;

    return (
        <Container>
            <Link to={"/"}>Main</Link>
            <Link to={"/login"}>Login</Link>
        </Container>
    )
}

const Container = styled.div`
`
export default Menu;