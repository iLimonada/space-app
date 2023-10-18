import React from 'react'
import styled from 'styled-components'
import Title from '../Title'
import Tags from './Tags'
import Trending from './Trending'

const ContainerGallery = styled.div`
  display: flex;
`
const FlowSection = styled.section`
  flex-grow: 1;
`

const Gallery = ( { fotos = []}) => {
  return (
    <>
      <Tags/>

      <ContainerGallery>
        <FlowSection>
          <Title>Navegue pela galeria</Title>
          {fotos.map( foto => foto.titulo)}
        </FlowSection>
        <Trending>

        </Trending>
      </ContainerGallery>
    </>
  )
}

export default Gallery