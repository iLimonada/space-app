import React, { useState } from 'react'
import tags from './tags.json'
import styled from 'styled-components'

const Container = styled.div`
  margin: 16px;
  display: flex;
  gap: 24px;
`

const StyledTag = styled.h3`
  margin: 0;
  color: #D9D9D9;
  font-size: 24px;
`

const ContainerButton = styled.div`
  display: flex;
  gap: 16px;
`

const StyledButton = styled.button`
  padding: 10px, 8px;
  font-size: 20px;
  line-height: 28.8px;
  color: #FFFFFF;
  border: 2px solid transparent;
  border-radius: 10px;
  box-sizing: border-box;
  background: rgba(217, 217, 217, 0.3);
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    border-color: ${props => props.$active ? '#C98CF1' : 'transparent'};
  }
`

const Tags = () => {

  const [Button, setButton] = useState('')

  const changeBorderColor = (id) => {
    setButton(id)
  }
  return (
    <Container>
      <StyledTag>Busque por tags:</StyledTag>
      <ContainerButton>
      {tags.map(tag => <StyledButton $active={Button === tag.id} key={tag.id} onMouseEnter={() => changeBorderColor(tag.id)}>{tag.title}</StyledButton>)}
      </ContainerButton>
    </Container>
  ) 
}

export default Tags 