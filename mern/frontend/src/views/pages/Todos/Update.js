import React from 'react';
import styled from 'styled-components';
import {PageTitle} from "../../components/Components.styled";
import Form from "../../components/Todos/Form";
import {todosActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";

function Update (props) {

    const {
        match
    } = props;

    const id = match.params.id;

    const {detail} = useSelector(state => state.todos)

    const onsubmit = (data) => {
        todosActions.updateTodo(id, data)
    }

    return (
        <Container>
            <PageTitle>수정하기</PageTitle>
            <Form onSubmit={onsubmit} defaultData={detail[id]}/>
        </Container>
    )
}

const Container = styled.div`
  padding: 100px 0;
`
export default Update;