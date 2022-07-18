import React from "react";
import styled from "styled-components";
import { Container } from "@chakra-ui/react";
import { HomeButton } from "./HomeButton";
import { LogoComponent } from "./LogoComponent";
import { Socials } from "./Socials";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
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

const Contact = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  font-size: larger;
  z-index: 3;
`;

const Blog = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  text-decoration: none;
  transform: rotate(90deg) translate(-50%, -50%);
  font-size: larger;
  z-index: 3;
`;

const Projects = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: 2rem;
  text-decoration: none;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: larger;
  z-index: 3;
`;

const Main = () => {
  return (
    <MainContainer>
      <Container className="p-8">
        <HomeButton />
        <LogoComponent />
        <Socials />
        <Contact>
          <a href={"mailto:devmizu@gmail.com"}>
            <h3>Contact me?</h3>
          </a>
        </Contact>
        <Blog>
          <a href={"/Blog"}>
            <h3>Blog</h3>
          </a>
        </Blog>
        <Projects>
          <a href={"/Project"}>
            <h3>Projects</h3>
          </a>
        </Projects>
      </Container>
    </MainContainer>
  );
};

export default Main;
