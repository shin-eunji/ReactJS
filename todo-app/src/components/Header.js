import React from 'react';
import styled from 'styled-components';

import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from "react-router-dom";

import {appActions} from "../redux/actionCreators";
import Sidebar from "./Sidebar";
import {useSelector} from "react-redux";
import Login from "./Login";

function Header () {

    const {openSidebar} = useSelector(state => state.app);
    const {PopupSidebar} = useSelector(state => state.app);

    const handleSidebar = () => {
        appActions.updateState({
            openSidebar: true
        })
    }
    const handlePopup = () => {
        appActions.updateState({
            PopupSidebar: !PopupSidebar
        })
    }

    return (
        <Container>
            <Logo>
                <svg width="32" height="32" className="_1Jlgk" version="1.1" viewBox="0 0 32 32"
                     aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                </svg>
            </Logo>
            <Nav>
                <NavItem to={'/'}>Home</NavItem>
                <NavItem to={'/todo'}>Todo</NavItem>
            </Nav>
            <ButtonLogin onClick={handlePopup}>Login</ButtonLogin>
            <ButtonMenu onClick={handleSidebar}>
                <AiOutlineMenu/>
            </ButtonMenu>


            {
                openSidebar &&
                <Sidebar openSidebar={openSidebar}/>

            }

            {
                PopupSidebar &&
                    <Login PopupSidebar={PopupSidebar}/>
            }
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 10px rgba(0,0,0,.1);
  background: #fff;
  padding: 10px 20px;
`
const Logo = styled.div`
    
`;
const Nav = styled.div`
    
`;
const NavItem = styled(Link)`
  margin: 0 16px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: #333;
  &:hover {
    color: #aaa;
  }
`;
const ButtonMenu = styled.div`
  font-size: 30px;
  font-weight:bold;
  color: #333;
  
`;
const ButtonLogin = styled.div`
  background: #13ff00;
  color: #fff;
  font-size: 18px;
  font-weight:bold;
  text-align:center;
  padding: 10px 30px;
  cursor: pointer;
`;
export default Header;