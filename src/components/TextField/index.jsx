import React from 'react'
import styled from 'styled-components'
import search from "../TextField/search.svg";

const Container = styled.div`
  display: inline-block;
  position: relative;
`

const StyledTextField = styled.input`
  height: 56px;
  width: 602px;
  padding: 12px 16px;
  color: #C98CF1;
  background: transparent;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 10px;
  outline: none;
  font-size: 20px;
  line-height: 20px;
`

const SearchIcon = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
`

const TextField = ({ setFilter }) => {
  return (
    <Container>
    <StyledTextField onChange={(Event) => { setFilter(Event.target.value) }} placeholder='O que você procura?'/>
    <SearchIcon src={search}/>
    </Container>
  )
}

export default TextField