import React from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom'
import {connect} from "react-redux";

function Detail (props) {

    const {
        todo
    } = props;

    const id = useParams();

    return (
        <Container>
            <h1>{todo?.text}</h1>
            <h5>Created at: {todo?.id}</h5>
        </Container>
    )
}

function mapStateToProps(state, ownProps) {
    const {match:
            {params:
                {id}
            }
        } = ownProps;
    
    return { todo: state.find(todo => todo.id === parseInt(id)) }
}

const Container = styled.div`
`
export default connect(mapStateToProps)(Detail);