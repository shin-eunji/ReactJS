import React from 'react';
import styled from 'styled-components';

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineEllipsis } from "react-icons/ai";

function Header (props) {

    const {} = props;
    const specialChars = {__html: '&copy;&mdash;&ldquo;'}
    return (
        <Container>
            <HeaderTop>
                <Logo path="/">
                    <svg width="32" height="32" className="_1Jlgk" version="1.1" viewBox="0 0 32 32"
                         aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title>
                        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                    </svg>
                    <Text>
                        <p className={"logo"}>Unsplash</p>
                        <p className={"text"}>Photos for everyone</p>
                    </Text>
                </Logo>
                <Input>
                    <AiOutlineSearch color={"#666"} size={"26"} />
                    <input className={"search"} type="text" placeholder={"Search free high-resolution photos"}/>
                </Input>

                <Menu>
                    <Link>Topics</Link>
                    <Link>Explore</Link>
                    <Link><AiOutlineEllipsis size={"30"}/></Link>
                    <Button>
                        <Link className={"btnSubmit"}>Submit a photo</Link>
                        <Link className={"btnLogin"}>Login</Link>
                        <Link className={"btnJoin"}>Join free</Link>
                    </Button>
                </Menu>
            </HeaderTop>
            <Nav>
                <Link>Editorial</Link>
                <List>
                    <Link>Sustainability</Link>
                    <Link>Film</Link>
                    <Link>Wallpapers</Link>
                    <Link>COVID-19</Link>
                    <Link>Travel</Link>
                    <Link>Nature</Link>
                    <Link>Textures &amp; Patterns</Link>
                    <Link>Current Events</Link>
                    <Link>People</Link>
                    <Link>Business &amp; Work</Link>
                    <Link>Technology</Link>
                    <Link>Animals</Link>
                    <Link>Interiors</Link>
                    <Link>Architecture</Link>
                    <Link>Texture &amp; Patterns</Link>
                    <Link>Current Events</Link>
                    <Link>People</Link>
                    <Link>Business &amp; Work</Link>

                </List>
                <Link className={"all"}>View all</Link>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
`
const HeaderTop = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  flex-wrap:wrap;
  margin: 0 10px;
  padding: 10px 0;
`;
const Logo = styled.div`
  position:relative;
  top: 0;
  bottom: 0;
  left: 0;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  flex-wrap: wrap;
  flex-direction:row;
  flex: 1 1 0;
  cursor:pointer;
`;
const Text = styled.div`
  margin-left: 10px;
  color: #111;
  
  .logo {
      font-weight:bold;
      color: #111;
      font-size: 16px;
      padding: 0;
      margin: 0;  
  }
  .text {
      font-weight:600;
      color: #111;
      font-size: 14px;
      padding: 0;
      margin: 0;
  }
`;
const Input = styled.div`
  height: 36px;
  background: #eee;
  border-radius: 50px;
  display:flex;
  align-items:center;
  flex: 4 1 0;  
  padding: 5px 10px;
  .search {
    border: 0;
    background: none;
    margin-left: 10px;
    font-size: 16px;
    width: 100%;
  }
`;
const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content: flex-end;
  flex: 3 1 0;
    
`;
const Link = styled.div`
    width: auto;
    padding: 0 20px;
    color: #666;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      color: #111;
    }
    
`;  
const Button = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: center;
  .btnSubmit {
    background-color: #fff;
    border: 1px solid #aaa;
    padding: 6px 12px;
    border-radius: 5px;
    font-weight: bold;
    margin-right: 60px;
    cursor: pointer;
    &:hover {
      color: #111;
      border: 1px solid #666;
    }
  }
    
  .btnLogin {
    position:relative;
    top: 0;
    left: 0;
    cursor: pointer;
    padding: 10px 20px;
    margin-right: 10px;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -18px;
      width: 1px;
      height: 100%;
      background: #aaa;
    }
  }
  .btnJoin {
    background-color: #3cb46e;
    border: 1px solid #aaa;
    padding: 6px 12px;
    border-radius: 5px;
    font-weight: bold;
    border: none;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #37a866;
    }
  }
`;
const Nav = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-around;
    align-items:center;
    flex-direction:row;
    .all {
        position:relative;
        top: 0;
        right: 0;
        left: 0;
        padding: 30px;
      &:before {
      content: "";
      position:absolute;
      top: 0;
      left: -200px;
      background: linear-gradient(to right, rgba(255,255,255,.0), rgba(255,255,255,1));
      width: 200px;
      height: 100%;
      }
    }
`;
const List = styled.div`
    height: 100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
    flex: 1 1 0;
    box-sizing: initial;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
`;
export default Header;