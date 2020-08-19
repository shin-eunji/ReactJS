import React, {useState} from 'react';
import styled from 'styled-components';

function Login (props) {

    const {} = props;

    const [ value, setValue ] = useState([])


    return (
        <Container>
            <LoginHeader className="Login-header">
                <svg width="32" height="32" className="_1Jlgk" version="1.1" viewBox="0 0 32 32"
                     aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                </svg>
                <p className={"login-title"}>Login</p>
                <p>Welcome Back.</p>
            </LoginHeader>
            <LoginBody className="login-body">
                <LoginFacebook>
                    <button>Login with Facebook</button>
                </LoginFacebook>
                <p></p>
                <InputContainer>
                    <Input>
                        <p>Eamil</p>
                        <input type="text"
                               name="email"
                               className={"login-control"}
                               onChange={(e) => {
                                   setValue({
                                       ...value,
                                       email: e.target.value
                                   })
                               }}
                        />
                    </Input>
                    <Input>
                        <p>Password</p>
                        <input type="password"
                               name="password"
                               className={"login-control"}
                               onChange={(e) => {
                                   setValue({
                                       ...value,
                                       password: e.target.value
                                   })
                               }}
                        />
                        <a href="#" className={"forgot"}>Forgot your password?</a>
                    </Input>
                    <LoginButton>
                        <button onClick={() => {
                            console.log("value", value);
                        }}>Login</button>
                    </LoginButton>
                </InputContainer>
                <Join className={"join"}>Don't have an account?<a href="#">Join</a></Join>
            </LoginBody>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  width: 100%;
`
const LoginHeader = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  .login-title {
    font-weight:800;
    font-size: 30px;
    margin: 20px 0;
  }  
`;
const LoginBody = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;
const LoginFacebook = styled.div`
  margin: 20px 0;
  button {}
`;
const InputContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  margin: 30px 0;
  border-radius: 5px;
`
const Input = styled.div`
  position:relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display:flex;
  flex-direction:column;
  p {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 16px;
  }
  input {
    height: 36px;
    border-radius: 5px;
    border: 1px solid #666;
    margin-bottom: 20px;
    padding: 20px 0;
    width: 560px;
  }
  .forgot {
    position: absolute;
    top: 0;
    right: 0;
    text-align:right;
    color: #666;
    text-decoration: underline;
  }
`;
const LoginButton = styled.div`
  background-color: #111;
  border-radius: 5px;
  text-align:center;
  button {
    width: 100%;
    height: 100%;
    padding: 12px 0;
    background: none;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }
`;
const Join = styled.div`
  text-align:center;
  a {
    color: #666;
    text-decoration: underline;
  }
`;
export default Login;