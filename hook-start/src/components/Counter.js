import React, {useState} from 'react';
import styled from 'styled-components';

function Counter (props) {

    const {} = props;

    const [value, setValue] = useState(0)

    return (
        <Container>
            <p>{value}</p>
            <button onClick={() => {
                setValue(value + 1)
            }}>Plue</button>
            <button onClick={() => {
                setValue(value - 1)
            }}>Minus</button>
        </Container>
    )
}

const Container = styled.div`
`
export default Counter;