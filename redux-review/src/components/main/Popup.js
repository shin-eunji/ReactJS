import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/app/redux";

function Popup (props) {

    const {} = props;

    const {title, description} = useSelector(state => state.app)

    const dispatch = useDispatch()

    const closePopup = () => {
        dispatch(Action.Creators.updateState({
            popup: {
                title: '',
                description: ''
            }
        }))
    }

    return (
        <Container onClick={closePopup}>
            <h2>{title}</h2>
            <p>{description}</p>
        </Container>
    )
}

const Container = styled.div`
`
export default Popup;