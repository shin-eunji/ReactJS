import React from 'react';
import styled from 'styled-components';
import {BiMenu} from 'react-icons/bi'
import {connect} from "react-redux";
import {appActions} from "../redux/actionCreators";

function Header (props) {

    const {
        sidebar,
    } = props;

    const openNotice = () => {
        appActions.updateState({
            popup: {
                title: '',
                description: ''
            }
        })
    }

    const handleSidebar = () => {
      appActions.updateState({
          Sidebar: !sidebar
      })
    }

    return (
        <Container>
            <Menu onClick={handleSidebar}>
                <BiMenu/>
            </Menu>
            <ButtonPopup onClick={openNotice}>공지</ButtonPopup>
        </Container>
    )
}

const Container = styled.div`
  height: 70px;
  background: #fff;
  display:flex;
  justify-content: flex-end;
  align-items:center;
  border-bottom: 1px solid #eee;

`
const Menu = styled.div`
  font-size: 34px;
  padding: 10px;
  cursor: pointer;
`;  

const ButtonPopup = styled.div`
    
`;
export default connect(state => state, dispatch => ({dispatch}))(Header);