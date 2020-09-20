import React from 'react';
import styled from 'styled-components';
import {Button, ButtonGroup} from "../Button/Button.Styled";
import {Overlay} from "../Components.styled";
import {appActions} from "../../../redux/actionCreators";

function PopComfirm(props) {

    const {
        title,
        onDelete
    } = props;

    const onCancel = () => {
        appActions.handlePopconfirm('')
    }

    const onConfirmDelete = () => {
        onDelete();
        onCancel();

    }

    return (
        <Overlay center alpha={0.3} onClick={onCancel}>
            <Container onClick={e => e.stopPropagation()}>
                <h2>{title}</h2>
                <ButtonGroup >
                    <Button sort={"info"} size={'sm'} onClick={onCancel}>취소</Button>
                    <Button sort={"danger"} size={'sm'} onClick={onConfirmDelete}>확인</Button>
                </ButtonGroup>
            </Container>
        </Overlay>
    )
}

const Container = styled.div`
  background: #fff;
  padding: 30px;
`

export default PopComfirm;