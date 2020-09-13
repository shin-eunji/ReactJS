import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import {todosActions} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import SkeletonLoader from "../../components/Loader/SkeletonLoader";
import Item from "./Item";
import {Switch, Route} from "react-router-dom";
import List from "./List";
import Write from "./Write";
import Detail from "./Detail";
import Modify from "./Modify";

function Todos (props) {

    const {} = props;

    const {list} = useSelector(state => state.todos)

    useEffect(() => {
        todosActions.getTodos()
    }, [])

    if(list?.length === 0) return <SkeletonLoader/>

    return (
        <Container>
            <Switch>
                <Route exact path={'/todos'} component={List} />
                <Route path={'/todos/write'} component={Write} />
                <Route path={'/todos/Detail/:id'} component={Detail} />
                <Route path={'/todos/modify/:id'} component={Modify} />
            </Switch>
        </Container>
    )
}

const Container = styled.div`
  background: #f4f4f4;
  min-height: 100vh;
  padding: 30px 0;
`
export default Todos;