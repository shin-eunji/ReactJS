import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {appActions} from "../redux/actionCreators";

function Popup () {

    const {title, description} = useSelector(state => state.popup)


    const closePopup = () => {
        appActions.updateState({
            popup: {
                title: '',
                description: ''
            }
        })
    }

    return (
        <Container onClick={closePopup}>
            <Content onClick={(e) => {
                e.stopPropagation();
            }}>
                <h2>{title}</h2>
                <p>{description}</p>
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
    z-index: 1100;
    background: rgba(0,0,0,.5);
    display:flex;
    justify-content:center;
  align-items:center;
`
const Content = styled.div`
  padding: 30px;
  background: #fff;
  width: 400px;
  h2 {
   font-size: 24px;
   margin-bottom: 10px;
   color: #333;
  } 
  p {
    font-size: 18px;
    color: #666;
    line-height: 1.5;
  } 
`;
export default Popup;