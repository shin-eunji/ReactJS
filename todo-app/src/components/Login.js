import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {appActions} from "../redux/actionCreators";

function Login (props) {

    const {} = props;

    const handlePopup = () => {
        appActions.updateState({
            PopupSidebar: false
        })
    }

    return (
        <Container onClick={handlePopup}>
            <LoginBox></LoginBox>
        </Container>
    )
}

const Container = styled.div`
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:center;  
  background-color: rgba(0,0,0,.24);
`
const LoginBox = styled.div`
  width: 500px;
  height: 300px;
  background: #fff;
  box-shadow: 0 0px 10px 10px rgba(0,0,0,.2);
  
`;
export default Login;