import React from 'react'
import Title from '../../Title' 
import styled from 'styled-components'
import fotos from './trending-pics.json'

const StyledPicsList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const StyledImage = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const StyledButton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
    &:hover {
        background: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);
        color: #fff; 
    }
`;

const Trending = () => {
  return (<div style={{ minWidth: 212 }}>
    <Title $alinhamento="center">Populares</Title>
    <StyledPicsList>
      {fotos.map(foto => <StyledImage key={foto.id} src={foto.path} alt={foto.alt}/>)}
    </StyledPicsList>
    <StyledButton>Ver Mais</StyledButton>
    </div>
  )
}

export default Trending