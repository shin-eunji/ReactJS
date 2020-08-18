import React from 'react';
import styled from 'styled-components';

function Popup (props) {

    const {
        onClose
    } = props;

    return (
        <Container onClick={() => onClose(false)}>
            팝업입니다.
        </Container>
    )
}

const Container = styled.div`
  position:fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.4);
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  display:flex;
  align-items:center;
  justify-content:center;
`
export default Popup;