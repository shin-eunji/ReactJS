import React from 'react';
import styled from 'styled-components';

function Popup (props) {

    const {
        handlePopup
    } = props;

    return (
        <Container onClick={()=> {
            handlePopup(false)
        }}>
            팝업입니다.
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(0,0,0,.4);
    color:#fff;
    font-weight: 600;
    font-size: 40px;
    display:flex;
    align-items:center;
    justify-content:center;
`


export default Popup;