import React, { useState } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { Container } from "@chakra-ui/react";
import { HomeButton } from "./HomeButton";
import { LogoComponent } from "./LogoComponent";
import { Socials } from "./Socials";
import { Spirals } from './svgs'

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

  a {
    font-weight: 700;
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
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  transition: ease-in-out 1s;
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  text-decoration: none;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: larger;
  z-index: 3;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const About = styled.div`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  transition: ease-in-out 1s;
  z-index: 3;

  & >a:hover {
    color: "#57BC90";
  }
`;

const Skills = styled.div`
  color: ${(props) => props.theme.text};
  z-index: 3;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.div`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  display: flex;
  cursor: pointer;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite ${props => props.click ? '10s' : '30s'} linear;
  }
  & > :last-child {
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: black;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 0;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }
  
  return (
    <MainContainer>
      <Container className="p-8">
        <HomeButton />
        <LogoComponent theme={click ? 'dark' : 'light'}/>
        <Socials theme={click ? 'dark' : 'light'} />
        <DarkDiv click={click} />
        <Center click={click}>
          <Spirals width={click ? 120 : 200} onClick={() => handleClick()} />
          <span></span>
        </Center>
        <Contact>
          <a href={"mailto:devmizu@gmail.com"}>
            <h3>Contact me?</h3>
          </a>
        </Contact>
        <Blog>
          <Link href={"/Blog"}>
            <a>Blog</a>
          </Link>
        </Blog>
        <Projects click={click}>
          <Link href={"/Projects"} passHref>
            <a>Projects</a>
          </Link>
        </Projects>
        <BottomBar>
          <About click={click}>
            <Link href={"/About"} passHref>
              <a>About</a>
            </Link>
          </About>
          <Skills>
            <Link href={"/Skills"} passHref>
              <a>Skills</a>
            </Link>
          </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;
