import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai'
import {Action} from "../../redux/app/redux";
import {useDispatch, useSelector} from "react-redux";

function Header (props) {

    const {
    } = props;

    const dispatch = useDispatch()

    const handleSidebar = () =>
        dispatch(Action.Creators.updateState({
            openSidebar: true
        }))

    const Counter = () => {
        useSelector(state => state.counter)
    }



    return (
        <Container>
            <HeaderContainer>
                <Logo></Logo>
                <ButtonMenu onClick={handleSidebar}>
                    <AiOutlineMenu/>
                </ButtonMenu>
                {Counter}
            </HeaderContainer>
        </Container>
    )
}

const Container = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display:flex;
  align-items: flex-start;
  height: 60px;
  background: #fff;
`
const HeaderContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  width: 100%;
`;
const Logo = styled.div`
  width: 80px;
  height: 60px;
  background: url("https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/bltf12e74912af38059/5da5061a0ef9ac6378484ee6/66786781-7eb7f180-ee96-11e9-8d81-ff5b02eb862a.png") 50% 50% / 100% no-repeat;
  cursor: pointer;
`;
const ButtonMenu = styled.div`
  cursor: pointer;
  font-size: 30px;
`;

export default Header;
