import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'

function App (props) {

    const {} = props;

    const [count, setCount] = useState(0)
    const [todos, setTodo] = useState([])
    const [state, setState] = useState(false)

    useEffect(() => {
        document.title = `time ${count}`
    })

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/todos').then((res) => {
            const data = res.data;
            setTodo(data)
        })
    },[])


    return (
        <Container>
            <button onClick={() => {
                setState((previousState) => !previousState);
                props.onChange(!state);
            }}
            data-testid="toggle"
            >
                {state === true ? 'turn off': 'turn on'}
            </button>
            <p>{count}</p>
            <button id="" onClick={() => {
                setCount(count + 1)
            }}>Click Me!</button>
            <UserBox>
                {
                    todos.map((todo, index, title) => {
                        return <p key={index} name={title} className={"list"}>
                            {todo.id} -
                            {todo.title} -
                            {todo.completed}
                        </p>
                    })
                }
            </UserBox>

        </Container>
    )
}

const Container = styled.div`
  button {
    background-color: #ffcc00;
    color: #fff;
    font-size: 30px;
    font-weight:bold;
    padding: 5px 10px;
    -webkit-border-radius: 30px;-moz-border-radius: 30px;border-radius: 30px;
  }
`
const UserBox = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  color: #000;
  width: 300px;
  .list {
    background-color: #fff;
    -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0,0,0,.1);
    margin: 10px 0;
    padding: 10px;
    
  }
`;

export default App;