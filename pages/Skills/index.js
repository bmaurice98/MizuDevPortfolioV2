import Link from "next/link";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import BigTitle from "../../components/BigTitle";
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
  z-index: 5;
  line-height: 1.5;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Ubuntu Mono", monospace;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
    backdrop-filter: blur(3px);
  }
  @media (max-width: 425px) {
    display: block;
    overflow-y: auto;
    width: calc(15rem + 25vw);
    height: 50vh;
    padding: 1rem 2rem;
    margin-bottom: 10rem;
    font-size: x-large;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
        <Link href={"/Skills/devResume"} legacyBehavior={true}>
          <Main>
            <Title>Full Stack Developer</Title>
            <Description>
              I enjoy being apart of something that will create an impact
              influence others. My love for technology can make this reality.
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
        </Link>
        {/* <Link href={"/Skills/editorResume"} legacyBehavior={true}>
          <Main>
            <Title>Video Developing and Graphic Design</Title>
            <Description>
              Creating content has always been a passion of mine and I&apos;ve
              decided it&apos;s time I finally start pursing it further!
            </Description>
            <Description>
              <strong>Softwares</strong>
              <p>
                Adobe Premier, After Effects, Illustrator, Photoshop, InDesign,
                Davinci Resolve, Figma
              </p>
            </Description>
          </Main>
        </Link> */}
        <HomeButton theme="light" pos="fixed" />
        <LogoComponent theme="light" />
        <Socials theme="light" />
        <ParticleComponent theme="light" />
        <BigTitle top="70%" right="5%" text="SKILLS" />
      </MainContainer>
    </ThemeProvider>
  );
};

export default SkillsPage;
