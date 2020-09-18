import React from 'react';
import styled from 'styled-components';
import List from "../../components/Todos/List";
import Item from "../../components/Todos/Item";
import {useSelector} from "react-redux";

function TodosContainer (props) {

    const {} = props;

    const {list} = useSelector(state => state.todos);

    return (
        <Container>
            <List data={list}
                render={(item, index) => <Item key={index} {...item} />}
            />
        </Container>
    )
}

const Container = styled.div`
`
export default TodosContainer;