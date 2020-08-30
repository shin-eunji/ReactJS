import React from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";

function Sidebar (props) {
    
    console.log("props", props);

    const {} = props;

    return (
        <Container>
            Sidebar
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 300px;
    box-shadow: 1px 1px 15px rgba(0,0,0,.2);
    background: #fff;
    z-index: 1000;
`

const mapStateToStoProps = (state) => ({
    openSidebar: state.openSidebar
})
const mapDispatchToProps = (dispatch) => ({dispatch})

export default connect(mapStateToStoProps, mapDispatchToProps)(Sidebar);