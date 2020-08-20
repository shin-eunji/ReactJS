import React, {useState} from 'react';
import styled from 'styled-components';
import Popup from "./Popup";

function Post (props) {

    const {
        item
    } = props;
    
    const [ popup, handlePopup ] = useState(false)

    const [ over, handleMouseover ] = useState(false)

    return (
        <Container>
            <Photo
                onClick={() => {
                    handlePopup(true)
                }}
                onMouseOver={() => {
                    handleMouseover(true)
                }}
                >
                {
                    popup &&
                        <Popup onClose={handlePopup} />
                }
                <img src={item.urls.small} />
                {
                    over &&
                    <Info onMouseOver={() => {
                        handleMouseover(false)}
                    }/>
                }
            </Photo>
        </Container>
    )
}

const Container = styled.div`
    margin: 40px 0;
    flex: 1 1 0;
`
const Photo = styled.div`
    position: relative;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3);
    
`;
export default Post;