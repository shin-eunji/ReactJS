import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/app/redux";

function Popup (props) {

    const {
        title,
        description
    } = props;

    return (
        <Container>
            <PopupBox>
                <h2>{title}</h2>
                <p>{description}</p>
                <Close>닫기</Close>
            </PopupBox>
        </Container>
    )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.3);
  z-index: 1001;
  display:flex;
  align-items:center;
  justify-content:center;
  
`
const PopupBox = styled.div`
  width: 500px;
  height: 300px;
  background: #fff;
  color: #000;
  -webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;
  h2 {
    font-size: 30px;
    font-weight:bold;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;
const Close = styled.div`
    cursor: pointer;
`;
export default Popup;