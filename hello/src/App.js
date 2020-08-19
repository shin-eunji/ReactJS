import React, {useState} from 'react';
import styled from 'styled-components';

function App (props) {

    const {} = props;

    const [ count, setCount ] = useState(0)

    return (
        <Container>
            <p>{count}</p>
            <button onClick={() => {
                setCount(count - 1)
            }}>Click Me</button>
        </Container>
    )
}

const Container = styled.div`
`
export default App;