import React from 'react';
import styled from 'styled-components';

import { AiOutlineClose } from "react-icons/ai";


function Popup (props) {

    const {
        onClose
    } = props;

    return (
        <Container>
            <Button>
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
    
`;
export default Popup;