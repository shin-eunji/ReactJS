import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import {todosActions} from "../../../redux/actionCreators";
import FormGroup from "../Form/FormGroup";
import {Button} from "../Button/Button.Styled";
function Form (props) {

    const {
        onSubmit,
        defaultData
    } = props;

    const formRef = useRef(null);

    const { register, handleSubmit, watch, errors } = useForm();
    
    console.log(watch('example'));

    const [rect, setRect] = useState({})

    useEffect(() => {
        if(formRef.current) {
            setRect(formRef.current.getBoundingClientRect())
        }
    }, [])

    return (
        <Container ref={formRef}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup name="title"
                           label="제목"
                           register={register({ required: true })}
                           errorType={errors?.title?.type}
                />
                <FormGroup name="body"
                           label="내용"
                           register={register({ required: true })}
                           errorType={errors?.body?.type}
                />


                <Button sort={"primary"} >수정</Button>
            </form>
        </Container>
    )
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
export default Form;