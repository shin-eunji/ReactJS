import React from 'react';
import styled from 'styled-components';
import {AiOutlineRight} from 'react-icons/ai'

function MainNotice (props) {

    const {} = props;

    return (
        <Container>
            <span>오픈</span>
            <Text>
                <p>Lorem ipsum dolor sit amet.</p>
                <AiOutlineRight/>
            </Text>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content: flex-start;
  background: #fdf4f5;
  -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;
  padding: 10px 14px;
  span {
    color: #ff0000;
    font-size: 16px;
    font-weight: 500;
    margin-right: 10px;
    width: auto;
  }
`
const Text = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    flex: 1;
    cursor: pointer;
    p {
      font-size: 16px;
      font-weight: 500;
    }
`;
export default MainNotice;