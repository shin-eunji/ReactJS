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

    useEffect(()=> {
        axios.get("http://jsonplaceholder.typicode.com/users").then(res => {
            const data = res.data;
            setUsers(data);
        })
    }, [])
    return (
        <Container>
            <Button onClick={() => {
                setPopup(true)
            }}>팝업 보여주기</Button>
            {
                popup && <Popup onClose={setPopup}/>
            }
            <Form/>
            <UserCotainer>
                {
                    users.map((user, index) => {
                        return <User key={index} user={user}/>
                    })
                }
            </UserCotainer>
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