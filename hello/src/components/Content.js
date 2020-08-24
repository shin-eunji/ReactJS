import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'

function Content (props) {

    const {} = props;

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get("https://api.unsplash.com/photos/?client_id=t_jbP7JejOj1keyZ7UiEl1BZcoPHG3vxmy3rPUGhVRc").then(res => {
            // console.log("res", res);
            const data = res.data;
            setPost(data);
            console.log("data", data);
        })
    }, [])

    return (
        <Container>
            <Post>
                {
                    post.map((item, index) => {
                        return <Item key={index} item={item}>
                            <img src={item.urls.small} alt="photo"/>
                        </Item>
                    })
                }
            </Post>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`
const Post = styled.div`
  display: flex;
  align-items:center;
  
`;
const Item = styled.div`
  width: 300px;
  height: 300px;  
`;
export default Content;