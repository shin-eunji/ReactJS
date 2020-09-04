import React from 'react';
import styled from 'styled-components';
import { navLinks } from './Searchlist'
import Linked from "./Linked";

import { AiOutlineSearch } from 'react-icons/ai'

function MainSearch (props) {

    const {} = props;

    return (
        <Container>
            <Title>여행계획 / 인기도시</Title>
            <SearchBox>
                <Search>
                    <AiOutlineSearch/>
                </Search>
               {
                   navLinks.map((route, index) => <Linked key={index} to={route.to}>{route.name}</Linked>)
               }
            </SearchBox>

            <Title>손쉬운 여행 준비</Title>
            <Gnb>
                <Nav>
                    <NavItem>
                        Text
                    </NavItem>
                    <NavItem>
                        Text
                    </NavItem>
                    <NavItem>
                        Text
                    </NavItem>
                    <NavItem>
                        Text
                    </NavItem>
                </Nav>
            </Gnb>
        </Container>
    )
}

const Container = styled.div`
`
const Title = styled.div`
  margin: 30px 0 20px;
  font-size: 28px;
  font-weight: 600;
`;
const SearchBox = styled.div`
  display:flex;
  align-items:center;
  justify-content: flex-start;
  width: 100%;
  overflow-x: auto;
  margin-top: 30px;
`;
const Search = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  min-width: 120px;
  height: 120px;
  background: #ecf3fd;
  -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
  margin-right: 30px;
  cursor: pointer;
`;
const Gnb = styled.div`
  
`;
const Nav = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
    
`;
const NavItem = styled.div`
  width: 25%;
  height: 100px;
  background: #eee;
  margin: 0 10px;
  display:flex;
  align-items:flex-end;
  justify-content: center;
  cursor: pointer;
`;

export default MainSearch;