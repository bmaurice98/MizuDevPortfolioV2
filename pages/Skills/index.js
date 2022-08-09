import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { HomeButton } from "../../components/HomeButton";
import { LogoComponent } from "../../components/LogoComponent";
import ParticleComponent from "../../components/ParticleComponent";
import { Socials } from "../../components/Socials";
import { lightTheme } from "../../components/Themes";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 1)`};
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  width: 30vw;
  height: 60vh;
  padding: 2rem;
  border: 2px solid ${(props) => props.theme.text};
  justify-content: center;
  align-items: center;
  z-index: 3;
  line-height: 1.5;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Ubuntu Mono", monospace;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  font-weight: 600;
  ${Main}:hover {
    & > * {
      color: ${(props) => props.theme.body};
    }
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  text-align: center;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
`;
const Skills = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  display: flex;
  list-style: none;
`;

const SkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainContainer>
        <Main>
          <Title>Full Stack Developer</Title>
          <Description>
            I like to apply my passions to developing products that will leave
            positive influences on the world.
          </Description>
          <Description>
            <strong>Languages</strong>
            <p>JavaScript, Typescript, HTML, CSS, Python</p>
            <strong>Frameworks</strong>
            <p>ReactJS, NextJS, Tailwind, Prisma, Docker</p>
            <strong>Database</strong>
            <p>MongoDB, Firebase, PostgreSQL</p>
          </Description>
        </Main>
        <HomeButton />
        <LogoComponent />
        <Socials />
        <ParticleComponent />
      </MainContainer>
    </ThemeProvider>
  );
};

export default SkillsPage;
