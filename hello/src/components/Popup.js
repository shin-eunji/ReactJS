import React from 'react';
import styled from 'styled-components';

function Popup (props) {

    const {
        onClose
    } = props;

    return (
        <Container onClick={() => onClose(false)}>
            Popup
        </Container>
    )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.4);
  display:flex;
  align-items:center;
  justify-content:center;
  color: #fff;
  font-weight:bold;
  font-size: 30px;
  z-index: 100;
`

export default Popup;