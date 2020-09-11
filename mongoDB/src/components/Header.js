import React from 'react';
import styled from 'styled-components';

import Search from "./Search";

import {FiMoreHorizontal} from 'react-icons/fi';
import Sidebar from "./Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../redux/app/redux";
function Header (props) {

    const {} = props;

    const dispatch = useDispatch()

    const {popup} = useSelector(state => state.app)
    const {openSidebar} = useSelector(state => state.app)

    const openPopup = () => {
        dispatch(Action.Creators.updateState({
            popup: !popup
        }))
    }

    const handleSidebar = () => {
        dispatch(Action.Creators.updateState({
            openSidebar: !openSidebar
        }))
    }

    return (
        <Container>
            <TopHeader>
                <Logo to={'/'}>
                    <svg width="32" height="32" className="_1Jlgk" version="1.1" viewBox="0 0 32 32"
                         aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash
                        Home</title>
                        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                    </svg>
                    <LogoTitle>
                        <h1>Unsplash</h1>
                        <p>Photo for everyone</p>
                    </LogoTitle>
                </Logo>
                <SearchForm>
                    <Search/>
                </SearchForm>
                <QuickMenu>
                    <Menu>
                        <MenuItem>Topics</MenuItem>
                        <MenuItem>Explore</MenuItem>
                        <MenuItem onClick={openPopup}>
                            <FiMoreHorizontal className={"more"}/>
                        </MenuItem>
                        {
                            popup &&
                            <PopupBox popup={popup}/>
                        }
                        <MenuItem onClick={handleSidebar} className={"btn"}>Submit a photo</MenuItem>
                        <Info>
                            <MenuItem to={"/login"} className={"login"}>Login</MenuItem>
                            <MenuItem className={"btn_mint"}>Join Free</MenuItem>
                        </Info>
                    </Menu>
                </QuickMenu>
            </TopHeader>

            <Gnb>
                <Nav>
                    <Content className={"nav_first"}>Editorial</Content>
                    <NavItem>
                        <Content>
                            <p>FEATURED</p>
                            Work From Home
                        </Content>
                        <Content>
                            <p>FEATURED</p>
                            Technology
                        </Content>
                        <Content>Wallpapers</Content>
                        <Content>Travel</Content>
                        <Content>Nature</Content>
                        <Content>Travel</Content>
                        <Content>Nature</Content>
                        <Content>Film</Content>
                        <Content>Textures & Patterns</Content>
                        <Content>Current Events</Content>
                        <Content>People</Content>
                        <Content>Business & Work</Content>
                        <Content>COVID-19</Content>
                        <Content>Animals</Content>
                        <Content>Interiors</Content>
                        <Content>Architecture</Content>
                        <Content>Food & Drink</Content>
                        <Content>Athletics</Content>
                        <Content>Spirituality</Content>
                        <Content>Health & Wellness</Content>
                        <Content>Fashion</Content>
                        <Content>Experimental</Content>
                        <Content>Arts & Culture</Content>
                        <Content>History</Content>
                    </NavItem>
                    <Content className={"nav_last"}>View all</Content>
                </Nav>
            </Gnb>

            {
                openSidebar &&
                <Sidebar openSidebar={openSidebar}/>

            }
        </Container>
    )
}

const Container = styled.div`
  box-shadow: 0px 0px 5px 10px rgba(0,0,0,.05);
  background: #fff;
  padding: 10px 30px 0px;
`
const TopHeader = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content:flex-start;
  text-decoration: none;
`;
const LogoTitle = styled.div`
  color: #111;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin: 0 20px 0 10px;
  line-height: 1.1;
  h1 {
    font-size: 16px;
    font-weight:800;
    line-height: 1.3;
  }
  p {
    font-size: 15px;
    font-weight:500;
  }
`;
const SearchForm = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    flex: 1;
    background: #eee;
    border: 1px solid #fff;
    -webkit-border-radius: 60px;-moz-border-radius: 60px;border-radius: 60px;
    &:hover {
      border: 1px solid #ddd;
    }
`;
const QuickMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    
`;
const Menu = styled.div`
    display:flex;
    align-items:center;
    margin-left: 10px;
`;
const MenuItem = styled.div`
    color: #666;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 20px;
    display:block;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #333;
    }
    &.btn {
      border: 1px solid #666;
      -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;
      padding: 8px 10px;
    }
    &.btn_mint {
      background: #3cb46e;
      color: #fff;
      -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;
      padding: 8px 10px;
      &:hover {
        background: #37a866;
      }
    }
    .more {
    font-size: 20px;
    font-weight: 800;
    
    }
`;
const Info = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left: 20px;
    .login {
        position:relative;
        margin: 0 20px;
        &:before {
            content: "";
            position: absolute;
            top: 0px;
            left: -10px;
            width: 1px;
            height: 36px;
            background-color: #d1d1d1;
        }
    }
`;
const Gnb = styled.div`
    width: 100%;
`;
const Nav = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content: space-between;
    .nav_first {
      position:relative;
      text-align:left;
      padding: 20px 0;
      margin-right: 30px;
      &:after {
          content: '';
          position: absolute;
          top: 5px;
          right: -30px;
          width: 1px;
          height: 40px;
          background: #aaa;
      }
    }
    .nav_last {
      position:relative;
      padding: 20px 0;
      margin-left: 20px;
        &:before {
          content: '';
          position:absolute;
          top: 0;
          left: -200px;
          width: 200px;
          height: 48px;
          background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1));
        }
    }
`;
const NavItem = styled.div`
    display:flex;
    align-items: flex-end;
    justify-content:flex-start;
    flex: 1;
    overflow-x: auto;
`;
const Content = styled.div`
    color: #777;
    font-size: 16px;
    font-weight: 600;
    padding: 20px;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
      color: #333;
    }
    p {
      font-size: 12px;
      font-weight: 400;
      
    }
`;
const PopupBox = styled.div`
    position: absolute;
    top: 50px;
    right: 300px;
    width: 400px;
    height: 500px;
    background: #000;
`;
export default Header;