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
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: calc(0.8rem + 1vw);
  backdrop-filter: blur(2px);
  position: relative;
  margin: auto auto;
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainContainer>
        <HomeButton theme="dark" />
        <LogoComponent theme="dark" />
        <Socials theme="dark" />
        <ParticleComponent theme="dark" />
        <Center>
          I&apos;ve always been a techie, fantasizing of new ideas to make
          unnecessarily complex problems simpler
          <br></br>
          My Tech related interests are with Building Web 3.0 Technologies as
          well as Deep Learning Applications
          <br></br>I try to apply my passions to developing products with
          Node.js and Modern Javascript Libraries and Frameworks such as React
          and NextJS
        </Center>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AboutPage;
