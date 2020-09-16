import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";
import {appActions} from "../redux/actionCreators";

function Sidebar (props) {
    
    const handleSidebar = () => {
        appActions.updateState({
            openSidebar: false
        })
    }

    return (
        <Container>
            <MenuClose onClick={handleSidebar}>
                <AiOutlineClose/>
            </MenuClose>
            <Gnb>
                <Nav>
                    <NavItem></NavItem>
                    <NavItem>Home</NavItem>
                    <NavItem>Ant Design Icons</NavItem>
                    <NavItem>Bootstrap Icons</NavItem>
                    <NavItem>BoxIcons</NavItem>
                    <NavItem>Devicons</NavItem>
                    <NavItem>Feather</NavItem>
                    <NavItem>Flat Color Icons</NavItem>
                    <NavItem>Font Awesome</NavItem>
                    <NavItem>Game Icons</NavItem>
                    <NavItem>Github Octicons icons</NavItem>
                    <NavItem>Grommet-Icons</NavItem>
                    <NavItem>Heroicons</NavItem>
                    <NavItem>IcoMoon Free</NavItem>
                    <NavItem>Ionicons</NavItem>
                    <NavItem>Material Design icons</NavItem>
                </Nav>
            </Gnb>
        </Container>
    )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  box-shadow: 0px 0px 5px 5px rgba(0,0,0,.1);
  background: #fff;
`
const Gnb = styled.div`
  padding: 30px;
`;
const Nav = styled.div`
  
`;
const NavItem = styled.div`
  font-size: 18px;
  font-weight:bold;
  line-height: 2;  
`;
const MenuClose = styled.div`
    
`;
export default Sidebar;