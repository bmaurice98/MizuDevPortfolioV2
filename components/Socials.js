import React from "react";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { SiLeetcode } from "@react-icons/all-files/si/SiLeetcode";
import { SiSpotify } from "@react-icons/all-files/si/SiSpotify";
import { SiTwitch } from "@react-icons/all-files/si/SiTwitch";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";

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
`;

const Line = styled.span`
  width: 2px;
  height: 6rem;
  margin-top: 0.5em;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : "#000"};
  transition: ease 1s;
`;

let SOCIAL_SIZE = "1.8rem";

export const Socials = (props) => {
  return (
    <>
      <Icons color={props.theme}>
        <a
          href={"https://github.com/bmaurice98"}
          target={"_blank"}
          rel="noreferrer"
        >
          <SiGithub fontSize={SOCIAL_SIZE} />
        </a>
        <a
          href={"https://www.linkedin.com/in/brandon-maurice-a77190187/"}
          target={"_blank"}
          rel="noreferrer"
        >
          <SiLinkedin fontSize={SOCIAL_SIZE} />
        </a>
        <a
          href={"https://leetcode.com/MizuPiku/"}
          target={"_blank"}
          rel="noreferrer"
        >
          <SiLeetcode fontSize={SOCIAL_SIZE} />
        </a>
        <a
          href={"https://www.twitch.tv/mizupiku"}
          target={"_blank"}
          rel="noreferrer"
        >
          <SiTwitch fontSize={SOCIAL_SIZE} />
        </a>
        <a
          href={"https://open.spotify.com/user/bmaurice100"}
          target={"_blank"}
          rel="noreferrer"
        >
          <SiSpotify fontSize={SOCIAL_SIZE} />
        </a>
        <Line color={props.theme} />
      </Icons>
    </>
  );
};
