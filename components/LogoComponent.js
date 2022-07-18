import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.text};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  font-size: larger;
  font-weight: 600;
  z-index: 3;

  & > *:hover {
    color: #015249;
  }
  cursor: pointer;
`;

export const LogoComponent = () => {
  return (
    <Logo>
      <a>BKM</a>
    </Logo>
  );
};
