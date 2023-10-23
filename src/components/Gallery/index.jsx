import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Images from "./Images";
import Tags from "./Tags";
import Trending from "./Trending";

const ContainerGallery = styled.div`
  display: flex;
  gap: 24px;
`;
const FlowSection = styled.section`
  flex-grow: 1;
`;

const ContainerImages = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
`;

const Gallery = ({ fotos = [] }) => {
  return (
    <>
      <Tags />
      <ContainerGallery>
        <FlowSection>
          <Title>Navegue pela galeria</Title>
          <ContainerImages>
            {fotos.map((foto) => (
              <Images key={foto.id} foto={foto} />
            ))}
          </ContainerImages>
        </FlowSection>
        <Trending></Trending>
      </ContainerGallery>
    </>
  );
};

export default Gallery;
