import React from 'react';
import styled from 'styled-components';
import { ContentContainer } from "../../Layout.Styled";
import {Action} from "../../redux/app/redux";
import {useDispatch} from "react-redux";

function Visual (props) {

    const {} = props;

    const dispatch = useDispatch();

    return (
        <Container>
            <StyledContentContainer>
                <Text>
                    <h1>Hello!</h1>
                    <button onClick={() => dispatch(Action.Creators.updateState({
                        popup: true
                    }))}>팝업</button>
                </Text>
            </StyledContentContainer>
        </Container>
    )
}

const Container = styled.div`
  height: 700px;
  background: url("https://images.unsplash.com/photo-1598637834635-d9d5ba6b5c9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80") 50% 100% / cover no-repeat;
  position:relative;
  z-index: 999;
`
const StyledContentContainer = styled(ContentContainer)`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  height: 100%;
`;
const Text = styled.div`
  text-align: center;
  color: #fff;
  h1 {
    font-size: 60px;
    font-weight:bold;
    margin-bottom: 30px;
    text-transform: capitalize;
  }
  button {
    height: 50px;
    width: 140px;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 1px solid #fff;
    -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;
    cursor: pointer;
    background-color: none;
  }
`;
export default Visual;