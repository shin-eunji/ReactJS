import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
function Form (props) {

    const {} = props;

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input name="title" defaultValue="test" ref={register} />
                <input name="body" ref={register({ required: true })} />

                {/* include validation with required or other standard HTML validation rules */}
                <input name="exampleRequired" ref={register({ required: true })} />
                {/* errors will return when field validation fails  */}

                <input type="submit" />
            </form>
            <input type="text"/>
            <input type="text"/>
        </Container>
    )
}

const Container = styled.div`
`
export default Form;