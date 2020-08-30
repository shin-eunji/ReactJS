import React, {useState} from 'react';
import styled from 'styled-components';
import Popup from "./Popup";

function Header (props) {

    const {} = props;

    const [popup, handlePopup] = useState(false)

    return (
        <Container>
            <Logo>
                <svg width="32" height="32" className="_1Jlgk" version="1.1" viewBox="0 0 32 32"
                     aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                </svg>
            </Logo>
            <Nav>
                <Link onClick={() => handlePopup(true)}>About</Link>
                <Link>Home</Link>
                <Link>Service</Link>
                <Link>Contact</Link>
            </Nav>
            <Button onClick={
                () => {
                    handlePopup(true)
                }
            }>Login</Button>
            {
                popup &&
                    <Popup onClose={handlePopup}/>
            }
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  box-shadow: 0 5px 5px rgba(0,0,0, .05);
  padding: 10px;
`
const Logo = styled.div`
    
`;
const Nav = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;
const Link = styled.div`
  margin: 0 10px;
  cursor:pointer;
  &:hover {
    color: #ffcc00;
  }
`;
const Button = styled.div`
  background: #ffcc00;
  border-radius: 3px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 4px 10px;
  cursor: pointer;
`;

export default Header;