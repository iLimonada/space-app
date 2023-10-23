import React from 'react'
import styled from 'styled-components'

const StyledBanner = styled.div` // Na resposta do professor foi usado figure, porém pode ser substituido por div 
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`
const StyledTitle = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    max-width: 300px;
    padding: 0 64px;
    color: #FFFFFF;
`
const Banner = ({backgroundImage}) => {
  return (
    <StyledBanner $backgroundImage={backgroundImage}>
        <StyledTitle>A galeria mais completa de fotos do espaço!</StyledTitle>
    </StyledBanner>
  )
}

export default Banner