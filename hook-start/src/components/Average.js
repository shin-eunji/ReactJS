import React, {useState} from 'react';
import styled from 'styled-components';


function Average (props) {

    const {} = props;

    const [list, setList] = useState([])
    const [number, setNumber] = useState('')

    return (
        <Container>
            <Form>
                <input type="text"/>
                <button>등록</button>
            </Form>
            <ul>
                <li></li>
            </ul>

            <br/>
            <p>평균값: {}</p>
        </Container>
    )
}

const Container = styled.div`
`
const Form = styled.div`
    
`;
export default Average;