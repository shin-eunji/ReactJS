import React from 'react';
import styled from 'styled-components';
import Action from '../../../redux/redux'
import { BiMenu } from 'react-icons/bi'
import {connect} from "react-redux";


function Header (props) {

    const {
        openSidebar,
        dispatch
    } = props;

    const openNotice = () => {
        dispatch(Action.Creators.updateState({
            popup: {
                title: 'Lorem ipsum dolor sit.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nostrum repudiandae soluta!'
            }
        }))
    }

    const handleSidebar = () => {
        dispatch(Action.Creators.handleSidebar(!openSidebar))
    }


    return (
        <Container>
            <Menu onClick={handleSidebar}>
                <BiMenu/>
            </Menu>
            <ButtonPopup onClick={openNotice}>Click</ButtonPopup>

        </Container>
    )
}

const Container = styled.div`
`

const Menu = styled.div`
    
`;
const ButtonPopup = styled.div`
    
`;
export default connect(state => state, dispatch => dispatch)(Header);