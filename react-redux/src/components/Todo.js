import React from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import {actionCreators} from "../redux/store";

function Todo (props) {

    const {
        text,
        onBtnClick
    } = props;

    return (
        <Container>
            <li>
                {text}
                <button onClick={onBtnClick}>DELETE</button>
            </li>
        </Container>
    )
}

const Container = styled.div`
`
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id))
    }
}
export default connect(null, mapDispatchToProps)(Todo);