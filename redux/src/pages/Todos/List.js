import React from 'react';
import styled from 'styled-components';
import Item from "./Item";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function List (props) {

    const {} = props;

    const {list} = useSelector(state => state.todos)

    return (
        <Container>
            {
                list.map((item, index) => <Item key={index} {...item} />)
            }
            <ButtonAdd to={'todos/write'}>할 일 추가</ButtonAdd>
        </Container>

    )
}

const Container = styled.div`
`

const ButtonAdd = styled(Link)`
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
`;
export default List;