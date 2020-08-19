import React from 'react';
import styled from 'styled-components';

import {AiOutlineSearch} from "react-icons/ai/index";

function Content (props) {

    const {

    } = props;

    return (
        <Container>
            <Visual>
                <Text>
                    Unsplash
                    <p>The internet’s source of freely-usable images.
                    Powered by creators everywhere.</p>
                    <Input>
                        <AiOutlineSearch color={"#666"} size={"26"} />
                        <input className={"search"} type="text" placeholder={"Search free high-resolution photos"}/>
                    </Input>
                </Text>
            </Visual>
        </Container>
    )
}

const Container = styled.div`
`

const Visual = styled.div`
    
`;
const Text = styled.div`
    
`;
const Input = styled.div`
    
`;
export default Content;