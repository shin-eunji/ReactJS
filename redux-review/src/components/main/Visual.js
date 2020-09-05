import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/app/redux";
import Sidebar from "./Sidebar";

function Visual (props) {

    const {
    } = props;

    const dispatch = useDispatch();
    const { popup } = useSelector(state => state.app);

    const openPopup = () => {
        dispatch(Action.Creators.updateState(
            !popup
        ))
    }

    return (
        <Container>
            <Text>
                <h2>Lorem ipsum.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, repudiandae.</p>
            </Text>
            <ButtonPopup onClick={openPopup}>팝업</ButtonPopup>
            {
                popup &&
                <Sidebar popup={openPopup}/>
            }
        </Container>
    )
}

const Container = styled.div`
  position:relative;
  top: 0;
  background: url("https://images.unsplash.com/photo-1599233461418-ea4e9459b393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80") 50% 50% / 100% no-repeat;
  height: 800px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  padding: ;
`
const Text = styled.div`
  color: #fff;
  text-align:center;
  margin-bottom: 30px;
  h2 {
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    font-weight: 300;
  
  }
`;
const ButtonPopup = styled.div`
  border: 1px solid #fff;
  padding: 14px 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
export default Visual;