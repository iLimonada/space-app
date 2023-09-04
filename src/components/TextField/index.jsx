import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StylzedTextField = styled.input`
  margin-right: 12px;
  height: 56px;
  width: 602px;
  padding: 12px 16px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  outline: none;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 10;
  right: 15px;
  height: 38px;
  width: 38px;
`;

const TextField = (props) => {
  return (
    <Container>
      <StylzedTextField placeholder="O que você procura?" {...props} />
      <SearchIcon src="/img/search.svg" />
    </Container>
  );
};

export default TextField;
