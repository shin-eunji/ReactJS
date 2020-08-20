import React from 'react';
import styled from 'styled-components';

function Popup (props) {

    const {
        onClose
    } = props;

    return (
        <Container onClick={() => {
            handlePopup(true)
        }}>
            팝업입니다.{popup}
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
  justify-content:center;
  align-items:center;
  
`
export default Popup;