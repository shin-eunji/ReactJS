import React from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import {actionCreators} from "../redux/store";
import {Link} from "react-router-dom";

function Todo (props) {

    const {
        text,
        onBtnClick,
        id
    } = props;

    return (
        <Container>

            <li>
                <Link to={`${id}`}>
                    {text}
                    <button onClick={onBtnClick}>DELETE</button>
                </Link>
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