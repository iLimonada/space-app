import React from "react";
import Images from "../Gallery/Images";
import styled from "styled-components";

const OverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledDialog = styled.dialog`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  padding: 0;
  border: 0;
  width: 100%;
  max-width: 1156px;
  form {
    button {
      position: relative;
      top: 10px;
      right: 70px;
    }
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

const ZoomModal = ({ foto, onClose, toggleFavorite }) => {
  return (
    <>
      {foto && (
        <>
          <OverLay />
          <StyledDialog open={!!foto} onClose={onClose}>
            <Images foto={foto} expandida={true} toggleFavorite={toggleFavorite}/>
            <form method="dialog">
              <StyledButton formMethod="dialog" >
                <img src="/icons/fechar.png" alt="Icone de fechar"/>
              </StyledButton>
            </form>
          </StyledDialog>
        </>
      )}
    </>
  );
};

export default ZoomModal;
