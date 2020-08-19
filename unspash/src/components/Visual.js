import React from 'react';
import styled from 'styled-components';

import {AiOutlineSearch} from "react-icons/ai/index";

function visual (props) {

    const {} = props;

    return (
        <Container>
            <Text>
                Unsplash
                <p>The internet’s source of <a href="">freely-usable images.</a>
                    Powered by creators everywhere.</p>
                <Input>
                    <AiOutlineSearch color={"#666"} size={"26"} />
                    <input className={"search"} type="text" placeholder={"Search free high-resolution photos"}/>
                </Input>
                <TagBoxBlock>
                    <h4>Trending:</h4>
                    <TagList tag={['태그1','태그2','태그3']}/>
                </TagBoxBlock>
            </Text>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  background: #000;
`
const Text = styled.div`
  margin: 140px 0;
  color: #fff;
  font-size: 48px;
  font-weight: 800;
  p{
      font-size: 18px;
      font-weight: 500;
      margin: 20px 0;
      a {
        color: #fff;
        opacity: .8;
      }
  }
`;
const Input = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  padding: 14px 10px;
  input {
    border: none;
    margin-left: 10px;
  }
`;
const TagBoxBlock = styled.div`
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 600;
    display:flex;
    flex-direction:row;
    align-items:center;
`;
const TagList = styled.div`
    font-weight: 600;
    margin-left: 3px;
`;
export default visual;