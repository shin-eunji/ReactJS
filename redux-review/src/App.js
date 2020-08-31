import React from 'react';
import styled from 'styled-components';
import './scss/style.scss'

function App (props) {

    const {} = props;

    const TOGGLE_SWITCH = "TOGGLE_SWITCH"
    const INCREASE = 'INCREASE'
    const DECREASE = 'DECREASE'

    const toggleSwitch = () => ({ type: TOGGLE_SWITCH })
    const increase = (difference) => ({ type: INCREASE, difference })
    const decrease = () => ({ type: DECREASE })

    return (
        <Container>
            <div className="toggle" toggleSwitch={toggleSwitch}></div>

            <h1>0</h1>
            <button className="increase" increase={increase}>+1</button>
            <button className="decrease" decrease={decrease}>-1</button>
        </Container>
    )
}

const Container = styled.div`
`
export default App;