import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import { Action } from '../../redux/app/redux'
import {useDispatch, useSelector} from "react-redux";
import Sidebar from "./Sidebar";

function Header (props) {

    const {
    } = props;

    const dispatch = useDispatch()
    const { openSidebar } = useSelector(state => state.app)

    const handleSidebar = () => {
        dispatch(Action.Creators.handleSidebar(!openSidebar))
    }

    return (
        <Container>
            <Logo>Logo</Logo>
            <SearchForm>
                <input type="text" placeholder={"All Search"} />
            </SearchForm>
            <Gnb>
                <Menu>
                    <MenuItem to={"about"}>About</MenuItem>
                    <MenuItem to={"service"}>Service</MenuItem>
                    <MenuItem to={"contact"}>Contact</MenuItem>
                </Menu>
            </Gnb>
            <ButtonMenu onClick={handleSidebar}>메뉴</ButtonMenu>
            {
                openSidebar &&
                <Sidebar openSidebar={handleSidebar}/>
            }
        </Container>
    )
}

const Container = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  border: 1px solid #eee;
  display:flex;
  align-items:center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 0 10px;
  background: #fff;
  z-index: 100;
`
const Logo = styled.div`
  color: #ff0000;
  font-size: 30px;
  font-weight:bold;
  cursor: pointer;
`;
const SearchForm = styled.div`
  background: #f4f4f4;
  border: 1px solid #eee;
  width: 300px;
  -webkit-border-radius: 100px;-moz-border-radius: 100px;border-radius: 100px;
  input {
    width: 100%;
    border: none;
    background: none;
    padding: 10px 0;
    margin: 0 10px;
  }  
`;

const Gnb = styled.div`
  
  
`;
const Menu = styled.div`
  display:flex;
  align-items:center;
`;
const MenuItem = styled(Link)`
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;
  color: #333;
  text-decoration: none;
  &:hover {
    color: #aaa;
  }
    
`;
const ButtonMenu = styled.div`
  background: #64ff8b;
  padding: 10px 12px;
  -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;
  color: #fff;
  font-size: 17px;
  font-weight:bold;
  cursor: pointer;
  &:hover {
    background: #4ecf6e;
  }
`;

export default Header;