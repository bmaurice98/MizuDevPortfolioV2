import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { HomeButton } from "../../components/HomeButton";
import { LogoComponent } from "../../components/LogoComponent";
import { Socials } from "../../components/Socials";
import { lightTheme } from "../../components/Themes";
import { Design, Develope } from "";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 1)`};
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Container = styled.div``;

const Main = styled.div`
  width: 30vw;
  height: 60vh;
  padding: 2rem;
  border: 2px solid ${(props) => props.theme.text};
  justify-content: center;
  align-items: center;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
`;

const SkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainContainer>
        <Main>
          <Title></Title>
        </Main>
        <Main>2</Main>
        <HomeButton />
        <LogoComponent />
        <Socials />
      </MainContainer>
    </ThemeProvider>
  );
};

export default SkillsPage;
