import React from 'react';
import styled from 'styled-components';
import List from "../../components/Todos/List";
import Item from "../../components/Todos/Item";
import {useSelector} from "react-redux";
import {navigate} from "../../../lib/History";

function TodosContainer (props) {

    const {} = props;

    const {list} = useSelector(state => state.todos);

    return (
        <Container>
            <List data={list}
                render={(item, index) => <Item key={index}
                                               {...item}
                onClick={() => navigate(`/todos/detail/${item._id}`)} />}
            />
            <AddTodo onClick={() => navigate('/todos/write')}>추가하기</AddTodo>
        </Container>
    )
}

const Container = styled.div`
`
const AddTodo = styled.div`
    
`;
export default TodosContainer;