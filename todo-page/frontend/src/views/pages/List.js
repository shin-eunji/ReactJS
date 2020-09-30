import React, {useEffect} from 'react';
import styled from 'styled-components';
import {todosActions} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import Item from "../components/todos/Item";
import {navigate} from "../../lib/History";
import TodoList from "../components/todos/TodoList";

function List(props) {

    const {} = props;

    useEffect(() => {
        todosActions.updateState()
    }, [])

    const {list} = useSelector(state => state.todos)

    return (
        <Container>
            <TodoList data={list}
                      render={(item, index) => <Item key={index}
                                                     {...item}
                      />}
            >

            </TodoList>
        </Container>
    )
}

const Container = styled.div`
`
export default List;