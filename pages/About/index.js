import { ThemeProvider } from "@emotion/react";
import React from "react";
import styled from "styled-components";
import { HomeButton } from "../../components/HomeButton";
import { LogoComponent } from "../../components/LogoComponent";
import ParticleComponent from "../../components/ParticleComponent";
import { Socials } from "../../components/Socials";
import { darkTheme } from "../../components/Themes";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 1)`};
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainContainer>
        <Container>
          <HomeButton theme="dark" />
          <LogoComponent theme="dark" />
          <Socials theme="dark" />
          <ParticleComponent theme="dark" />
        </Container>
        <Center></Center>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AboutPage;
