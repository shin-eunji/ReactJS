import React from 'react';
import styled from 'styled-components';

function Item (props) {

    const {
        title,
        description
    } = props;

    return (
        <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    )
}

const Container = styled.div`
`
const Title = styled.div`
    
`;
const Description = styled.div`
    
`;
export default Item;