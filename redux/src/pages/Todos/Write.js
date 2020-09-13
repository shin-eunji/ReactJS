import React, {useState} from 'react';
import styled from 'styled-components';
import {todosActions} from "../../redux/actionCreators";

function Write (props) {

    const {} = props;

    const [values, setValue] = useState({})

    const onChange = (e) => {
        const value = e.target.value;
        setValue({
            ...values,
            [e.target.name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        todosActions.addTodo(values)
    }
    
    

    return (
        <Container>
            <form>
                <FormGroup>
                    <Label>
                        <LabelText>제목</LabelText>
                        <Input
                            type={"text"}
                            name={'title'}
                            onChange={onChange}
                        />
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>
                        <LabelText>설명</LabelText>
                        <Input
                            type={"text"}
                            name={'description'}
                            onChange={onChange}
                             />
                    </Label>
                </FormGroup>
                <Button onClick={onSubmit}>추가하기</Button>
            </form>
        </Container>
    )
}

const Container = styled.div`

`
const Input = styled.input`
  border: 0;
  padding: 0;
  display: inline-block;
  width: 100%;
  height: 50px;
  background:none;
  outline: 0;
  box-shadow: none;
`;
const FormGroup = styled.div`
  padding: 20px;
`;
const Label = styled.div`
  border-bottom: 1px solid #000;
  display:block;   
`;
const LabelText = styled.span`
  
`;
const Button = styled.button`
    width: 240px;
    height: 50px;
    font-size: 16px;
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #ffcc00;
    color: #fff;
    margin: 20px auto;
    border: 0;
    outline: 0;
`;
export default Write;