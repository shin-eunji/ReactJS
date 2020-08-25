import React from 'react';
import styled from 'styled-components';
import Sidebar from "../Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../../redux/app/redux";

function Appbar (props) {

    const {} = props;

    const dispatch = useDispatch();
    const {openSidebar} = useSelector(state => state.app)

    return (
        <Container>
            <Logo>Logo</Logo>
            <ButtonMenu onClick={() => {
                dispatch(Action.Creators.updateState({
                    openSidebar: !openSidebar
                }))
            }}>Menu</ButtonMenu>
            <Sidebar openSidebar={openSidebar}/>
        </Container>
    )
}

const Container = styled.div`
  height: 70px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  box-shadow: 1px 2px 10px rgba(0,0,0,.15);
`
const Logo = styled.div`
    
`;
const ButtonMenu = styled.div`
  cursor: pointer;
`;
export default Appbar;