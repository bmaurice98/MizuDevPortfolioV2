import React from "react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import Link from "next/link";
import styled from "styled-components";

const Button = styled.button`
  top: 2rem;
  left: 48.6%;
  background-color: #a5a5af;
  color: clr;
  border-radius: 100%;
  width: 2.5rem;
  height: 2.5rem;
  z-index: 6;
  position: ${(props) => props.pos};
  justify-content: center;

  &:hover {
    background-color: ${({ bg }) => bg};
    color: ${({ color }) => color};
  }
`;

export const HomeButton = (props) => {
  const bg = props.theme === "dark" ? "#77C9D4" : "#015249";
  const clr = props.theme === "dark" ? "#015249" : "#77C9D4";

  return (
    <Link href="/">
      <Button bg={bg} color={clr} pos={props.pos || "absolute"}>
        <TriangleUpIcon />
      </Button>
    </Link>
  );
};
