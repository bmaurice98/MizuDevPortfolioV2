import React from "react";
import styled from "styled-components";
import { darkTheme } from "./Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => (props.color === "dark" ? darkTheme.text : "#000")};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  font-size: larger;
  font-weight: 500;
  z-index: 3;
  transition: ease-out 0.2s;
  cursor: pointer;

  &:hover {
    color: #015249;
  }
  cursor: pointer;
`;

export const LogoComponent = (props) => {
  return <Logo color={props.theme}>BKM</Logo>;
};
