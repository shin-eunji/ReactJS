import React, {useEffect} from 'react';
import styled from 'styled-components';
import Header from "../../components/Header";
import {useSelector} from "react-redux";
import axios from 'axios'
import {todosActions} from "../../redux/actionCreators";

function Todos (props) {

    const {list} = useSelector(state => state.todos)

    const getTodo = () => {
        new Promise((resolve, reject) => {
            const result = axios.get('http://jsonplaceholder.typicode.com/todos');
            console.log("result", result);
        })
    }

    getTodo()

    useEffect(() => {
        todosActions.updateState()
    }, [])

    return (
        <Container>
            <Header/>
            {
                list.map(item => <h1>{item.title}</h1>)
            }
        </Container>
    )
}

const Container = styled.div`
`
export default Todos;