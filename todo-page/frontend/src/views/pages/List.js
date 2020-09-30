import React, {useEffect} from 'react';
import styled from 'styled-components';
import {todosActions} from "../../redux/actionCreators";
import TodosContainer from "../container/todos";

function List(props) {

    const {} = props;

    useEffect(() => {
        todosActions.getTodos()
    }, [])

    return (
        <Container>
            <TodosContainer/>

        </Container>
    )
}

const Container = styled.div`
`
export default List;