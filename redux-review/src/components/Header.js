import React from 'react';
import styled from 'styled-components';
import Sidebar from "./Sidebar";
import { AiOutlineMenu } from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import { Action } from "../redux/app/redux";
import {navigate} from "../Helpers/History";
import {Link} from "react-router-dom";


function Header (props) {

    const {} = props;

    const dispatch = useDispatch()
    const {openSidebar} = useSelector(state => state.app)

    return (
        <Container>
            <Logo>Logo</Logo>
            <Nav>
                <NavItem to={'/'}>Home</NavItem>
                <NavItem onClick={() => navigate('/user')}>About</NavItem>
                <NavItem>Service</NavItem>
                <NavItem>Contact</NavItem>
            </Nav>
            <ButtonMenu onClick={() => dispatch(Action.Creators.updateState({
                openSidebar: !openSidebar
            }))}>
                <AiOutlineMenu/>
            </ButtonMenu>
            {
                openSidebar && <Sidebar openSidebar={openSidebar}/>
            }
        </Container>
    )
}

const Container = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80px;
  display:flex;
  align-items:center;
  justify-content: space-around;
  border-bottom: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 0px 5px 5px rgba(0,0,0,.1);
  z-index: 1000;
`
const Logo = styled.div`
  color: #ff0000;
  font-size: 20px;
  font-weight:bold;
`;
const Nav = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
`;
const NavItem = styled(Link)`
  cursor: pointer;
  padding: 10px;
  margin: 0 10px;
  &:hover {
    color: #aaa;
  }  
`;
const ButtonMenu = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-align:center;
  background: #00ffc4;
  padding: 10px 20px;
  -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;
  cursor: pointer;
  z-index: 10001;
  &:hover {
    background: #03e3af;
  }    
`;
export default Header;