import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/app/redux";

function Popup (props) {

    const {

    } = props;

    const { title, description } = useSelector(state => state.popup)

    const dispatch = useDispatch()

    const closePopup = () => {
        dispatch(Action.Creators.updateState({
            popup: {
                title: 'fdafafafa',
                description: 'fdafdaf'
            }
        }))
    }

    return (
        <Container onClick={closePopup}>
            <PopupBox>
                <h2>{title}</h2>
                <p>{description}</p>
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
export default Popup;