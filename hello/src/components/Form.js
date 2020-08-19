import React, {useState} from 'react';
import styled from 'styled-components';

function Form (props) {

    const {} = props;
    const [ value, setValue ] = useState({})

    return (
        <Container>
            <input type={"text"}
                   name={"email"}
                   className={"form-control"}
                   placeholder={"이메일"}
                   onChange={(e) => {
                       setValue({
                           ...value,
                           email: e.target.value
                       })
                   }}
            />

            <input type={"password"}
                   name={"password"}
                   className={"form-control"}
                   placeholder={"비밀번호"}
                   onChange={(e) => {
                       setValue({
                           ...value,
                           password: e.target.value
                       })
                   }}
            />

            <Button onClick={() => {
                console.log("value", value);
            }}>로그인</Button>
        </Container>
    )
}

const Container = styled.div`
  padding: 30px;
  display:flex;
  flex-wrap: nowrap;
  flex-direction:column;
    .form-control {
      margin-bottom: 10px;
      padding: 10px;
      width: 100%;
      border: 1px solid #aaa;
      color: #999;
      &:hover {
        border: 1px solid #999;
      }
    }
`;
const Button = styled.div`
  width: 300px;
  height: 50px;
  background: blue;
  color: #fff;
  font-size: 20px;
  font-weight:bold;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
`;
export default Form;