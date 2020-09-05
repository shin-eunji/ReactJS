import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";
import {useDispatch} from "react-redux";
import {Action} from "../../redux/app/redux";


function Sidebar (props) {

    const {
        openSidebar
    } = props;

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(Action.Creators.handleSidebar(!openSidebar))
    }


    return (
        <Container>
            <Menu>
                <MenuItem to={"about"}>About</MenuItem>
                <MenuItem to={"service"}>Service</MenuItem>
                <MenuItem to={"contact"}>Contact</MenuItem>
            </Menu>
            <Close onClick={handleClose}>
                <AiOutlineClose size={"30px"}/>
            </Close>
        </Container>
    )
}

const Container = styled.div`
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1000;
`
const Menu = styled.div`
    
`;
const MenuItem = styled.div`
    
`;
const Close = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;
export default Sidebar;