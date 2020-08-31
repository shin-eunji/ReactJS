import React from 'react';
import styled from 'styled-components';
import TodoListItem from "./TodoListItem";

function TodoList (props) {

    const {
        todos
    } = props;

    return (
        <Container>
            {
                todos.map(todo => (
                    <TodoListItem todo={todo} key={todo.id}/>
                ))
            }
        </Container>
    )
}

const Container = styled.div`
  width: 500px;
`
export default TodoList;