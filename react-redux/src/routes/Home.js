import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import { actionCreators } from "../redux/store";
import Todo from "../components/Todo";

function Home ({ todos, addTodo }) {
    const [text, setText] = useState("")
    function onChange(e) {
        setText(e.target.value)
    }
    function onSubmit(e) {
        e.preventDefault();
        addTodo(text)
        setText('');
    }
    return (
        <Container>
            <h1>To Do List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder={"To do"} value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {todos.map(todo =>(
                    <Todo {...todo} key={todo.id}/>
                ))}
            </ul>
        </Container>
    )
}

const Container = styled.div`
`

function mapStateToProps(state, ownProps) {
    return { todos: state }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (text) => dispatch(actionCreators.addTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);