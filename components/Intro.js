import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import {logo} from "../assets/MizuDev.png";

const Box = styled.div`
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
`;

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`

const Intro = (props) => {
  return (
    <Box>
      <SubBox>
        <Text>
          <h1>Hello,</h1>
          <h3>I'm Brandon</h3>
          <h3>But I also go by <span className="font-bold">Mizu</span></h3>
          <h6>I design simple and functional websites</h6>
        </Text>
      </SubBox>
      <SubBox>
        <div>
            <img className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto" src={logo} alt="profile Pic" />
        </div>
      </SubBox>
    </Box>
  );
};

export default Intro;
