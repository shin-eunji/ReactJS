import React, {useState} from 'react';
import styled from 'styled-components';
import Popup from "./components/Popup";


function App (props) {

    const {} = props;

    const [popup, handlePopup] = useState(false);

    return (
        <Container>
            <Button onClick={() => {
                handlePopup(true)
            }}>팝업 보여주기</Button>
            {
                popup && <Popup handlePopup={handlePopup}/>
            }

        </Container>
    )
}

const Container = styled.div`
    
`;

const Button = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  background-color: #ffcc00;
  z-index: 100;
  border: 1px solid #ff0000;
  width: 160px;
  height: 50px;
  cursor: pointer;
`;

export default App;