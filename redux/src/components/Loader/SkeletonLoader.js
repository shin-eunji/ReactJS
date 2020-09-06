import React from 'react';
import styled from 'styled-components';
import Skeleton from "react-loading-skeleton";


function SkeletonLoader (props) {

    const {} = props;

    return (
        <Container>
            <Para>
                <Skeleton width={300} height={20}/>
            </Para>
            <Skeleton width={300} height={20}/>
            <Skeleton width={300} height={20}/>
            <Skeleton width={300} height={20}/>
        </Container>
    )
}

const Container = styled.div`
position:fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 2000;
background: #fff;

`
const Para = styled.div`

`;
export default SkeletonLoader;