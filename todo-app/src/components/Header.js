import React from 'react';
import styled from 'styled-components';

import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from "react-router-dom";

function Header (props) {

    const {} = props;

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
            <ButtonMenu>
                <AiOutlineMenu/>
            </ButtonMenu>
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
export default Header;