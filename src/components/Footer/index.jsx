import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 75px;
  padding: 22px;
  background-color: rgba(4, 36, 79, 1);
  box-sizing: border-box;
`;
const ContainerIcon = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    margin-right: 24px;
  }
`;
const StyledText = styled.span`
  font-size: 16px;
  color: #ffffff;
  margin: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ContainerIcon>
        <li>
          <a href="#">
            <img src="/img/social/facebook.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/img/social/twitter.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/img/social/instagram.svg" />
          </a>
        </li>
      </ContainerIcon>
      <StyledText>Desenvolvido por André Luna e Alura.</StyledText>
    </StyledFooter>
  );
};

export default Footer;