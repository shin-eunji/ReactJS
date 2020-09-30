import React from 'react';
import styled from 'styled-components';

function TodoList (props) {

    const {
        data,
        render
    } = props;

    return (
        <Container>
            {
              data.map((item, index) => render(item, index))
            }
        </Container>
    )
}

const Container = styled.div`
`
export default TodoList;