import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";


function Popup (props) {

    const {
        title,
        description
    } = props;

    return (
        <Container>
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Close>
                    <AiOutlineClose/>
                </Close>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.25);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index: 10001;
`
const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 400px;
  min-height: 400px;
  background: #fff;
  box-shadow: 0px 0ox 5ox 5ox rgba(0,0,0,.1);
  background-color: #fff;
  z-index: 1000;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight:bold;
    margin-bottom: 10px;
`;
const Description = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
    
`;
const Close = styled.div`
    position:absolute;
    top: 0;
    right: 0;
    padding: 10px;
    
`;
export default Popup;