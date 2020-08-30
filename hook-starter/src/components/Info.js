import React, {useEffect, useReducer, useState} from 'react';
import styled from 'styled-components';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}
function Info (props) {

    const {} = props;

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    })

    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target)
    }

    return (
        <Container>
            <Input>
                <input type="text" value={name} onChange={onChange} placeholder={"Name"}/>
                <input type="text" value={nickname} onChange={onChange} placeholder={"Nick Name"}/>
            </Input>
            <hr/>
            <Text>
                <div>Name: {name}</div>
                <div>Nickname: {nickname}</div>
            </Text>
        </Container>
    )
}

const Container = styled.div`
`
const Input = styled.div`
    
`;
const Text = styled.div`
    
`;
export default Info;