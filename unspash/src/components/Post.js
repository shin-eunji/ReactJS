import React, {useState} from 'react';
import styled from 'styled-components';
import Popup from "./Popup";

function Post (props) {

    const {
        item
    } = props;
    
    const [ popup, handlePopup ] = useState(false)

    return (
        <Container>
            <Photo onClick={() => {
                handlePopup(true)
            }}>
                {
                    popup &&
                        <Popup onClick={on} />
                }
                <img src={item.urls.small} />
            </Photo>
        </Container>
    )
}

const Container = styled.div`
    margin: 40px 0;
    flex: 1 1 0;
`
const Photo = styled.div`
    
`;
export default Post;