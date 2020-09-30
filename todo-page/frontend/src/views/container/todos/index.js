import React, {useEffect} from 'react';
import styled from 'styled-components';
import Item from "../../components/todos/Item";
import TodoList from "../../components/todos/TodoList";
import {todosActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";

function TodosContainer (props) {

    const {} = props;

    const {list} = useSelector(state => state.todos)

    return (
        <Container>
            <TodoList data={list}
                      render={(item, index) => <Item key={index}
                                                     {...item}
                      />}
            />
        </Container>
    )
}

const Container = styled.div`
`
export default TodosContainer;