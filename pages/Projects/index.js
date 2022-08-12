import { ThemeProvider } from "@emotion/react";
import { motion } from "framer-motion";
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

const Center = styled(motion.ul)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

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
        <HomeButton theme="dark" pos="fixed" />
        <LogoComponent theme="dark" />
        <Socials theme="dark" />
        <ParticleComponent theme="dark" />
        <BigTitle top="5%" left="5%" text="WORK" />
        <Center ref={ref} variants={container} initial="hidden" animate="show">
          {Projects.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </Center>
      </MainContainer>
    </ThemeProvider>
  );
};

export default ProjectPage;
