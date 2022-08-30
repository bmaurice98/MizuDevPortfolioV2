import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import ME from "../public/MizuDev.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;

  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 3;

  @media (max-width: 425px) {
    top: 45%;
  }
`;

const SubBoxLeft = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  @media (max-width: 425px) {
    text-align: center;
    width: 100%;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.1)`};
  }
`;

const SubBoxRight = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  @media (max-width: 425px) {
    display: none;
  }
`;

const Text = styled(motion.div)`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }

  @media (max-width: 425px) {
    font-size: calc(1.5em + 2vw);
    text-align: center;
    padding: 1rem;
    color: #015249;
    line-height: normal;

    & > *:last-child {
      color: #015249;
      font-size: calc(0.5rem + 1.5vw);
      font-weight: 300;
    }
  }
`;

const Intro = (props) => {
  const animateStyle = `
  { height: "55vh";
  @media (max-width: 425px){
    height: "35vh"
  } }
  `;
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBoxLeft>
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h1>Hello,</h1>
          <h3>I&apos;m Brandon</h3>
          <h3>But I also go by Mizu</h3>
          <h3>I design both stylish and functional websites.</h3>
        </Text>
      </SubBoxLeft>
      <SubBoxRight>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Image src={ME} alt="profile Pic" layout="fill" />
        </motion.div>
      </SubBoxRight>
    </Box>
  );
};

export default Intro;
