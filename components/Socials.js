import React from "react";
import Link from "next/link";
import { DiGithubAlt } from "@react-icons/all-files/di/DiGithubAlt";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { SiLeetcode } from "@react-icons/all-files/si/SiLeetcode";
import { SiSpotify } from "@react-icons/all-files/si/SiSpotify";
import { SiTwitch } from "@react-icons/all-files/si/SiTwitch";
import styled, { css } from "styled-components";

const Icon = styled.div`
  transform: translate(0%);
  transition: 0.3s ease-out;

  ${(props) =>
    props.animated &&
    css`
      &:hover {
        position: fixed;
        transform: translate(0%, -30%);
        transition: 0.3s ease-out;
      }
    `}
`;

export const Socials = () => {
  return (
    <div>
      <div>
        <Icon animated>
          <Link href={"https://github.com/bmaurice98"}>
            <DiGithubAlt />
          </Link>
        </Icon>
        <Link href={"https://www.linkedin.com/in/brandon-maurice-a77190187/"}>
          <SiLinkedin />
        </Link>
        <Link href={"https://leetcode.com/MizuPiku/"}>
          <SiLeetcode />
        </Link>
        <Link href={"https://leetcode.com/MizuPiku/"}>
          <SiTwitch />
        </Link>
        <Link href={"https://leetcode.com/MizuPiku/"}>
          <SiSpotify />
        </Link>
      </div>
    </div>
  );
};
