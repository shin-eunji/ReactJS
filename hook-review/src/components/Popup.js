import React from 'react';
import styled from 'styled-components';

import { AiOutlineClose } from "react-icons/ai";
import Login from "./Login";


function Popup (props) {

    const {
        onClose
    } = props;

    return (
        <Container>
            <Login/>
            <Button onClick={() => onClose(false)}>
                <AiOutlineClose/>
            </Button>
        </Container>
    )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.2);
  color: #fff;
  font-size: 30px;
  font-weight:bold;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Button = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
  cursor: pointer;
`;
export default Popup;