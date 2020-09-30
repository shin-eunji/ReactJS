import React, {useState} from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form'

function Login (props) {

    const {} = props;

    const {register, handleSubmit, errors, watch} = useForm()
    const [values, setValue] = useState({})

    const onSubmit = data => console.log("data", data);

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label>Email</Label>
                <Input type="text"
                       name="email"
                       ref={register}
                       placeholder='Eamil'
                       register={register({required: true})}
                       errorType={errors?.email?.type}
                        onChange={(e) => {
                            setValue({
                                ...values,
                                email: e.target.value
                            })
                        }}
                />
                {errors.email && <span>This field is required</span>}
                <Label>Password</Label>
                <input type="password"
                       name="password"
                       ref={register}
                       placeholder='Password'
                       register={register({required: true})}
                       errorType={errors?.password?.type}
                       onChange={(e) => {
                           setValue({
                               ...values,
                               password: e.target.value
                           })
                       }}
                />
                {errors.password && <span>This field is required</span>}

                <ButtonLogin onClick={() => {

                }}>Login</ButtonLogin>
            </Form>
        </Container>
    )
}

const Container = styled.div`
`
const Form = styled.form`
    
`;
const Input = styled.input`
    
`;
const Label = styled.label`
    
`;
const ButtonLogin = styled.button`
    
`;
export default Login;