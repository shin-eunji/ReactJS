import React from 'react';
import styled from 'styled-components';

import { AiOutlineClose } from "react-icons/ai";

function Popup (props) {

    const {
        onClose
    } = props;

    return (
        <Container onClick={() => {
            onClose(false)
        }}>
            <PopupBox>
            </PopupBox>
            <Close>
                <AiOutlineClose/>
            </Close>
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
  display:flex;
  height: 3000px;
  justify-content:center;
  
`
const PopupBox = styled.div`
  margin-top: 100px;
    align-items:center;
    background-color: #fff;
    border-radius: 10px;
    width: 90%;
    height: 300px;
    
`;
const Close = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    color: #fff;
    font-size: 24px;
    font-weight:bold;
`;
export default Popup;