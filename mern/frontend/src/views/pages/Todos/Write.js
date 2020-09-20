import React from 'react';
import styled from 'styled-components';
import Form from "../../components/Todos/Form";
import {PageTitle} from "../../components/Components.styled";

function Write (props) {

    const {} = props;


    return (
        <Container>
            <PageTitle>할 일 추가</PageTitle>
            <Form/>
        </Container>
    )
}

const Container = styled.div`
  padding: 100px 0;
`
export default Write;