import React, {useMemo, useState} from 'react';
import styled from 'styled-components';

const getAvarage = numbers => {
    console.log("평균값 계산 중..");
    if(numbers.length === 0) return 0
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
}

function Average (props) {

    const {} = props;

    const [list, setList] = useState([])
    const [number, setNumber] = useState('')

    const onChange = (e) => {
        setNumber(e.target.value)
    }

    const onInsert = (e) => {
        const nextList = list.concat(parseInt(number));
        setList(nextList)

        setNumber('')
    }

    const avg = useMemo(() => getAvarage(list), [list])

    return (
        <Container>
            <Form>
                <input type="number" value={number} onChange={onChange}/>
                <button onClick={onInsert}>등록</button>
            </Form>
            <ul>
                {
                    list.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))
                }
            </ul>

            <br/>
            <p>평균값: {avg}</p>
        </Container>
    )
}

const Container = styled.div`
`
const Form = styled.div`
    
`;
export default Average;