import React, {useState} from 'react';
import styled from 'styled-components';
import './scss/style.scss'
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App () {

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Lorem ipsum dolor.",
            checked: true
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur.",
            checked: true
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet.",
            checked: true
        },
        {
            id: 4,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, vitae.",
            checked: true
        },
    ])

    return (
        <Container>
            <TodoTemplate/>
            <TodoInsert/>
            <TodoList todos={todos}/>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height: 100vh;
  
`
export default App;