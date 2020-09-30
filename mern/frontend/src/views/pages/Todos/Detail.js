import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {appActions, todosActions} from "../../../redux/actionCreators";
import {ButtonGroup} from "../../components/Button/Button.Styled";
import {Button} from "../../components/Button/Button.Styled";
import PopComfirm from "../../components/Popconfirm";
import {navigate} from "../../../lib/History";

function Detail (props) {

    const {
        match
    } = props;

    const id = match.params.id;

    const {popconfirm} = useSelector(state => state.app)
    const {detail} = useSelector(state => state.todos);
    const todo = detail[id];

    console.log("id", id);

    useEffect(() => {
        if(!todo) {
            todosActions.getTodoById(id);
        }
    }, [])

    const onPopconfirm = function() {
        appActions.handlePopconfirm('정말 삭제 하시겠습니까?')
    }
    const onDelete = () => {
        todosActions.deleteTodo(id)
    }

    if(!todo) return 'is loading...'

    return (
        <Container>
            <ButtonGroup>
                <Button sort={"info"} size={'sm'} onClick={() => navigate(`/todos/update/${id}`)}>수정</Button>
                <Button sort={"danger"} size={'sm'} onClick={onPopconfirm}>삭제</Button>
            </ButtonGroup>
            <h2>{todo?.title}</h2>
            <p>{todo?.body}</p>


            {
                popconfirm.title &&
                <PopComfirm {...popconfirm}
                            onDelete={onDelete}/>
            }
        </Container>
    )
}

const Container = styled.div`
  

`

export default Detail;