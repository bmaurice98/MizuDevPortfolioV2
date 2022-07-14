import React from "react";
import styled from "styled-components";
import { Container } from "@chakra-ui/react";
import { HomeButton } from "./HomeButton";
import { LogoComponent } from "./LogoComponent";
import { Socials } from "./Socials";

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;
 
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <Container className="p-8">
        <HomeButton />
        <LogoComponent />
        <Socials />
      </Container>
    </MainContainer>
  );
};

export default Main;
