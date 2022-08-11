import { ThemeProvider } from "@emotion/react";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import BigTitle from "../../components/BigTitle";
import { HomeButton } from "../../components/HomeButton";
import { LogoComponent } from "../../components/LogoComponent";
import ParticleComponent from "../../components/ParticleComponent";
import ProjectCard from "../../components/ProjectCard";
import { Socials } from "../../components/Socials";
import { darkTheme } from "../../components/Themes";
import { Projects } from "../../data/Projects";

const MainContainer = styled.div`
  height: 300vh;
  position: relative;
  overflow-x: hidden;
`;

const Center = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
`;

const ProjectPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
    };
    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <MainContainer>
        <HomeButton theme="dark" />
        <LogoComponent theme="dark" />
        <Socials theme="dark" />
        <ParticleComponent theme="dark" />
        <BigTitle top="10%" right="20%" text="WORK" />
        <Center ref={ref}>
          {Projects.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </Center>
      </MainContainer>
    </ThemeProvider>
  );
};

export default ProjectPage;
