import React from 'react'
import Link from "next/link";
import { DiGithubAlt } from "@react-icons/all-files/di/DiGithubAlt";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { SiLeetcode } from "@react-icons/all-files/si/SiLeetcode";
import { SiSpotify } from "@react-icons/all-files/si/SiSpotify";
import { SiTwitch } from "@react-icons/all-files/si/SiTwitch";


export const Socials = () => {
  return (
    <div>
      <div>
        <Link href={"https://github.com/bmaurice98"}>
          <DiGithubAlt />
        </Link>
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
}
