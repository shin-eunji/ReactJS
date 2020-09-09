import React from 'react';
import styled from 'styled-components';
import {AiOutlineSearch} from "react-icons/ai/index";
import {IoIosClose} from "react-icons/io/index";

function Search (props) {

    const {} = props;

    return (
        <Container>
            <AiOutlineSearch className={"search_icon"}/>
            <input type="text" placeholder={"Search free high-resulution photos"} />
            <IoIosClose className={"search_close"}/>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    width: 100%;
    input {
        width: 100%;
        border:none;
        background:none;
        padding: 10px 0 10px 10px;
    }
    .search_icon {
        font-size: 30px;
        margin: 10px;
        color: #aaa;
        cursor: pointer;
        &:hover {
            color: #111;
        }
    }
    .search_close {
        font-size: 26px;
        margin: 10px;
        font-weight: 500;
        color: #999;
        cursor: pointer;
    }
`
export default Search;