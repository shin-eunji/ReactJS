import React from 'react';
import styled from 'styled-components';
import Switch from "./Switch";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../redux/redux";

function Docs (props) {

    const {
        code,
        title,
        description
    } = props;

    const dispatch = useDispatch()
    const docs = useSelector(state => state.docs)

    const on = docs.includes(code);

    return (
        <Container>
            <Switch onClick={() => {
                dispatch(Action.Creators.updateState({
                    docs: [
                        ...docs,
                        code
                    ]
                }))
            }}
                on={on}
            />
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