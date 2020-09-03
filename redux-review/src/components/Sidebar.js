import React from 'react';
import styled from 'styled-components';

function Sidebar (props) {

    const {
        openSidebar
    } = props;

    return (
        <Container openSidebar={openSidebar}>
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Service</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
        </Container>
    )
}

const Container = styled.div`
  width: 400px;
  height: 100vh;
  position:fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  box-shadow: 0px 0px 5px 10px rgba(0,0,0,.1);
  z-index: 1000;
  overflow-y: auto;
  transition: .5s;
  transform: ${props => props.openSidebar ? 'none' : 'translateX(110%)' };
`
const Menu = styled.div`
  padding: 120px;    
`;
const MenuItem = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #333;
  padding: 10px;
  margin: 10px 0;

`;
export default Sidebar;