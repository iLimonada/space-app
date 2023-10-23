import React from "react";
import styled from "styled-components";

const StyledFigure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    box-sizing: border-box;
    color: #ffffff;
    padding: 12px;
    h3 {
      font-family: GandhiSansBold;
    }
    h4 {
      flex-grow: 1;
      font-weight: 400;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIconButton = styled.button`
  display: flex;
  margin-left: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Images = ({ foto, expandida = false }) => {
  return (
    <StyledFigure $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3> {foto.titulo} </h3>
        <StyledFooter>
          <h4> {foto.fonte} </h4>
          <StyledIconButton>
            <img src="/icons/favorito.png" alt="icone de favoritar" />
          </StyledIconButton>
          {!expandida && (
            <StyledIconButton aria-hidden={expandida}>
              <img src="/icons/expandir.png" alt="Icone de expandir" />
            </StyledIconButton>
          )}
        </StyledFooter>
      </figcaption>
    </StyledFigure>
  );
};

export default Images;
