import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import Popup from "./components/Popup";
import User from "./components/User";
import Form from "./components/Form";

import axios from 'axios'

function App (props) {

    const {} = props;

    const [ popup, setPopup ] = useState(false)
    const [ users, setUsers ] = useState([])

    return (
        <Container>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width: 100%;
  height: 100%;
`
const Button = styled.div`
  width: 300px;
  height: 50px;
  background: red;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor: pointer;
`;
const UserCotainer = styled.div`
    
`;
export default App;