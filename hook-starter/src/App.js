import React, {useState} from 'react';
import styled from 'styled-components';
// import Counter from "./components/Counter";
//import Info from "./components/Info";
// import CounterReducer from "./components/CounterReducer";
import Average from "./components/Average";

function App (props) {

    const {} = props;

    // const [visible, setVisible] = useState(false)

    return (
        <Container>
            <Average/>
            {/*<button onClick={() => {*/}
            {/*    setVisible(!visible)*/}
            {/*}}>*/}
            {/*    {visible ? '보이기' : '숨기기'}*/}
            {/*</button>*/}
            {/*<button onClick={() => {*/}
            {/*    setVisible(!visible)*/}
            {/*}}>*/}
            {/*    {visible ? '숨기기' : '보이기'}*/}
            {/*</button>*/}
            {/*{visible && <Info/>}*/}
            {/*<CounterReducer/>*/}
            {/*<Info />*/}
        </Container>
    )
}

const Container = styled.div`
`
export default App;