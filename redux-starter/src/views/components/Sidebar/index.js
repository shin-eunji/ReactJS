import React from 'react';
import styled from 'styled-components';

function Sidebar (props) {

    const {openSidebar} = props;

    return (
        <Container openSidebar={openSidebar}>
            <Menu>
                <MenuItem>Menu1</MenuItem>
                <MenuItem>Menu2</MenuItem>
                <MenuItem>Menu3</MenuItem>
                <MenuItem>Menu4</MenuItem>
                <MenuItem>Menu5</MenuItem>
                <MenuItem>Menu6</MenuItem>
                <MenuItem>Menu7</MenuItem>
            </Menu>
        </Container>
    )
}

const Container = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  width: 300px;
  background: #fff;
  padding: 80px 0;
  overflow-y: auto;
  transition: transform 0.4s;
  transform: ${props => props.openSidebar ? 'done' : 'translateX(-100%)' };
  border-right: 1px solid #eee;
`
const Menu = styled.div`

`;
const MenuItem = styled.div`
  padding: 10px 20px;
`;
export default Sidebar;