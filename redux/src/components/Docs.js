import React from 'react';
import styled from 'styled-components';
import Switch from "./Switch";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../redux/redux";

function Docs (props) {

    const {
        title,
        description
    } = props;



    return (
        <Container>
            <h2>{title}</h2>
            <p>{description}</p>
        </Container>
    )
}

const Container = styled.div`
  margin: 30px; 
  padding: 20px;
  background: #f4f4f4;
  h2 {
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 24px;
    
  }
  p{}
`
export default Docs;