import React from "react";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { SiLeetcode } from "@react-icons/all-files/si/SiLeetcode";
import { SiSpotify } from "@react-icons/all-files/si/SiSpotify";
import { SiTwitch } from "@react-icons/all-files/si/SiTwitch";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";
import { motion } from "framer-motion";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  color: ${(props) => (props.color === "dark" ? darkTheme.text : "#000")};
  transition: ease 1s;

  z-index: 3;
  & > a:not(:last-child) {
    margin: 0.2rem 0;
  }
  & > *:hover {
    color: #a5a5af;
  }

  @media (max-width: 425px) {
    display: ${(props) => (props.hidden === true ? "none" : "flex")};
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 6rem;
  margin-top: 0.5em;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : "#000"};
  transition: ease 1s;
`;

let SOCIAL_SIZE = "1.8rem";

export const Socials = (props) => {
  const { theme, hidden } = props;
  console.log(hidden);
  return (
    <>
      <Icons color={theme} hidden={hidden}>
        <motion.a
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.8 }}
          href={"https://github.com/bmaurice98"}
          target={"_blank"}
          rel="noreferrer"
        >
          <SiGithub fontSize={SOCIAL_SIZE} />
        </motion.a>
        <motion.a
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.6 }}
          href={"https://www.linkedin.com/in/brandon-maurice-a77190187/"}
          target={"_blank"}
          rel="noreferrer"
        >
          <SiLinkedin fontSize={SOCIAL_SIZE} />
        </motion.a>
        <motion.a
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.4 }}
          href={"https://leetcode.com/MizuPiku/"}
          target={"_blank"}
          rel="noreferrer"
        >
          <SiLeetcode fontSize={SOCIAL_SIZE} />
        </motion.a>
        <motion.a
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.2 }}
          href={"https://www.twitch.tv/mizupiku"}
          target={"_blank"}
          rel="noreferrer"
        >
          <SiTwitch fontSize={SOCIAL_SIZE} />
        </motion.a>
        <motion.a
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
          href={"https://open.spotify.com/user/bmaurice100"}
          target={"_blank"}
          rel="noreferrer"
        >
          <SiSpotify fontSize={SOCIAL_SIZE} />
        </motion.a>
        <Line
          color={props.theme}
          initial={{
            height: "0",
          }}
          animate={{
            height: "6rem",
          }}
          transition={{ type: "spring", duration: 0.5, delay: 0.5 }}
        />
      </Icons>
    </>
  );
};
