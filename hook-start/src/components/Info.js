import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

function Info (props) {

    const {} = props;

    const [name, setName] = useState()
    const [nickname, setNickname] = useState()
    
    useEffect(() => {
        console.log("name", name);

        return () => {
            console.log("name", name);
        }
    }, [name])
    
    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeNickname = e => {
        setNickname(e.target.value)
    }


    return (
        <Container>
            <Input>
                <input type="text" value={name} onChange={onChangeName} placeholder={"Name"}/>
                <input type="text" value={nickname} onChange={onChangeNickname} placeholder={"Nick Name"}/>
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