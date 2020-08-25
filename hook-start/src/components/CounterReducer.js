import React, {useReducer} from 'react';
import styled from 'styled-components';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default: return state;

    }
}

function CounterReducer (props) {

    const {} = props;

    const [state, dispatch] = useReducer(reducer, {value: 0});


    return (
        <Container>
            <p>{state.value}</p>
            <button onClick={() => {
                dispatch({ type: 'INCREMENT' })
            }}>+1</button>
            <button onClick={() => {
                dispatch({ type: 'DECREMENT' })
            }}>-1</button>
        </Container>
    )
}

const Container = styled.div`
`
export default CounterReducer;