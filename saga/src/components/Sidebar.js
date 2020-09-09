import React from 'react';
import styled from 'styled-components';

function Sidebar (props) {

    const {
    } = props;

    return (
        <Container>
            <Nav>
                <NavItem>Work From Home</NavItem>
                <NavItem>Technology</NavItem>
                <NavItem>Wallpapers</NavItem>
                <NavItem>Travel</NavItem>
                <NavItem>Nature</NavItem>
                <NavItem>Travel</NavItem>
                <NavItem>Nature</NavItem>
                <NavItem>Film</NavItem>
                <NavItem>Textures & Patterns</NavItem>
                <NavItem>Current Events</NavItem>
                <NavItem>People</NavItem>
                <NavItem>Business & Work</NavItem>
                <NavItem>COVID-19</NavItem>
                <NavItem>Animals</NavItem>
                <NavItem>Interiors</NavItem>
                <NavItem>Architecture</NavItem>
                <NavItem>Food & Drink</NavItem>
                <NavItem>Athletics</NavItem>
                <NavItem>Spirituality</NavItem>
                <NavItem>Health & Wellness</NavItem>
                <NavItem>Fashion</NavItem>
                <NavItem>Experimental</NavItem>
                <NavItem>Arts & Culture</NavItem>
                <NavItem>History</NavItem>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 100vh;
    background: #fff;
    box-shadow: 0 0 5px 5px rgba(0,0,0,.15);
    z-index: 1000;
    overflow-y: auto;
`
const Nav = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const NavItem = styled.div`
    margin: 20px 0;
`;
export default Sidebar;