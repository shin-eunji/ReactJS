import React from 'react';
import styled from 'styled-components';

function Post (props) {

    const {
        item
    } = props;
    
    console.log("item", item);

    return (
        <Container>
            <Photo>
                <img src={item.urls.small} />
            </Photo>
        </Container>
    )
}

const Container = styled.div`
    width: 100px;
    height: 300px;
    border: 1px solid #000;
    margin: 40px 0;
`
const Photo = styled.div`
    
`;
export default Post;