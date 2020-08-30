import React, {useState} from 'react';
import styled from 'styled-components';
import {AiOutlineUser, AiOutlineLock} from 'react-icons/ai'

function Login (props) {

    const {} = props;

    const [value, setValue] = useState([])

    return (
        <Container>
            <LoginBox>
              <h4>Login</h4>
                <LoginForm>
                    <Input>
                        <AiOutlineUser color={"#000"} size={"26"} padding={"10"}/>
                        <input type="text"
                               name={"email"}
                               placeholder={"Eamil"}
                               onChange={(e) => {
                                   setValue({
                                       ...value,
                                       email: e.target.value
                                   })
                               }}
                        />
                    </Input>
                    <Input>
                        <AiOutlineLock color={"#000"} size={"26"} padding={"10"}/>
                        <input type="password"
                               name={"password"}
                               placeholder={"Password"}
                               onChange={(e) => {

                                   setValue({
                                       ...value,
                                       password: e.target.value
                                   })
                               }}
                        />
                    </Input>
                    <Button onClick={() => {
                        console.log("value", value);
                    }}>Login</Button>
                </LoginForm>
            </LoginBox>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`
const LoginBox = styled.div`
    background: #fff;
    -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;
    box-shadow: 5px 5px 0px rgba(0,0,0,.05);
    padding: 30px;
    h4 {
      color: #000;
      font-size: 20px;
      font-weight: 500;
    }
`;
const LoginForm = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
`;
const Input = styled.div`
  border: 1px solid #aaa;
  -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;
  display:flex;
  align-items:center;
  input {
    margin-left: 5px;
    padding: 10px 6px;
    border:none;
  } 
  &:hover {
    border: 1px solid #111;
  } 
`;
const Button = styled.div`
    background: #ffcc00;
    padding: 5px 10px;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    width: 100%;
`;
export default Login;