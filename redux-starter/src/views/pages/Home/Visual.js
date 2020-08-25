import React from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../../components/Layout/Layout.styled";
import {Action} from "../../../redux/app/redux";
import {useDispatch} from "react-redux";

function Visual (props) {

    const {} = props;

    const dispatch = useDispatch();
    return (
        <Container>
            <StyledContentContainer>
                <Text>
                    <h1>Hello World</h1>
                    <Button onClick={() => {
                        dispatchEvent(Action.Creators.updateState({
                            popup: true
                        }))
                    }}>PopUp</Button>
                </Text>
            </StyledContentContainer>
        </Container>
    )
}

const Container = styled.div`
  height: 700px;
  background: url("https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2667&q=80") 50% 100% / cover no-repeat;
  position:relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
  }
`;
const StyledContentContainer = styled(ContentContainer)`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    height: 100%;
`;
const Text = styled.div`
  color: #fff;
  text-align: center;
  
  h1 {
    font-size: 40px;
    margin-bottom: 10px;
    text-transform:capitalize;
    
  }
`;
const Button = styled.div`
    height: 40px;
    width: 140px;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size: 14px;
    border: 1px solid #fff;
    -webkit-border-radius: 6px;-moz-border-radius: 6px;border-radius: 6px;
    cursor: pointer;
`;
export default Visual;