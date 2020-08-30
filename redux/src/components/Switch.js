import React from 'react';
import styled from 'styled-components';

function Switch (props) {

    const {
        on
    } = props;



    return (
        <Container>
            <Dot on={on}/>
        </Container>
    )
}

const Container = styled.div`
  width: 70px;
  height: 38px;
  padding: 3px;
  -webkit-border-radius: 18px;-moz-border-radius: 18px;border-radius: 18px;
  background: #eee;
  border: 1px solid #ddd;
`
const Dot = styled.div`
    width: 30px;
    height: 30px;
    -webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;
    background: #ddd;
    $(props => prpps.on &&
      background: #08c;
      transform: translateX(24px);)
`;
export default Switch;