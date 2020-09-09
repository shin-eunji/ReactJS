import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import axios from 'axios'
import {todosActions} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import SkeletonLoader from "../../components/Loader/SkeletonLoader";

function Todos (props) {

    const {} = props;

    const {list} = useSelector(state => state.todos)

    const  getTodos = async () => {
        const result = await axios.get("http://jsonplaceholder.typicode.com/todos");
        const todos = result.data;

        todosActions.updateState({
            list: todos
        })
    }

    useEffect(() => {
        todosActions.getTodos()
    }, [])

    if(list?.length === 0) return <SkeletonLoader/>

    return (
        <Container>
            {
                list.map(item => <div>{item.title}</div>)
            }
        </Container>
    )
}

const Container = styled.div`
`
export default Todos;