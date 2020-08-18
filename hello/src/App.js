import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Popup from "./components/Popup";
import axios from 'axios';
import User from "./components/User";

function App (props) {

    const {} = props;

    const [ popup, handlePopup ] = useState(false);
    const [user, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
            const users = res.data;
            setUsers(users)

        })
    },[])
    

    return (
        <Container>
            <Button onClick={() => {
                handlePopup(true)
            }}>팝업 보여주기</Button>
            {
                popup &&
                <Popup onClose={handlePopup    }/>
            }
            <UserContainer>
                {
                    user.map((user, index) => {
                        return <User key={index} user={user}/>
                    })
                }
            </UserContainer>



        </Container>
    )
}

const Container = styled.div`
`
const Button = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 150px;
    height: 50px;
    background: blue;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
`;
const UserContainer = styled.div`
    
`;

export default App;