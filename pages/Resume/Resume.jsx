import React, { useState } from "react";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="relative m-auto bg-Resume md:w-[50%] py-1 shadow-lg w-[95%]">
      <div className="flex flex-col justify-center items-center my-5 mx-8">
        {/* HEADER */}
        <h1 className="text-center  text-5xl font-bold">
          <span className="font-normal text-gray-500">Brandon </span>Maurice
        </h1>
        <h2 className="text-gray-500 text-center">Los Angeles, California</h2>
        <h2 className="text-xs text-gray-600 text-center">
          (+1)917-9**-**** |{" "}
          <Link
            href="mailto:Devmizu@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            passHref
          >
            <span className="hover:underline cursor-pointer">
              DevMizu@gmail.com
            </span>
          </Link>{" "}
          |{" "}
          <Link
            href="https://www.github.com/bmaurice98"
            target="_blank"
            rel="noreferrer noopener"
            passHref
          >
            <span className="hover:underline cursor-pointer">
              Gitub.Bmaurice98
            </span>
          </Link>{" "}
          {/* |{" "}
            <Link
              href={"https://www.linkedin.com/in/brandon-maurice-a77190187/"}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="hover:underline cursor-pointer">bmaurice98</span>
            </Link>{" "} */}
          |{" "}
          <Link
            href={"https://www.devmizu.tech"}
            target="_blank"
            rel="noreferrer noopener"
            passHref
          >
            <span className="hover:underline cursor-pointer">devmizu.tech</span>
          </Link>{" "}
        </h2>
        <div className="flex flex-col">
          {/* EDUCATION */}
          <h2 className="text-3xl text-gray-500 font-semibold my-2">
            Education
          </h2>
          <div className="w-[100%] h-[0.25px] bg-gray-600"></div>
          <div className="flex mt-3">
            <p className="w-[50%] font-semibold text-lg">Hope College</p>
            <p className="w-[50%] text-right font-semibold text-gray-400">
              Aug 2016 - Dec 2020
            </p>
          </div>
          <p className="font-semibold text-[18px] text-gray-600">
            Bachelor of Computer Science
          </p>
          <p className="text-sm text-gray-500">
            <span className="text-black font-semibold">&bull; Courses: </span>
            Web Design &amp; Implementation, database Systems, Algorithms &amp;
            Discrete Structures
          </p>
          {/* SKILLS */}
          <h2 className="text-3xl text-gray-500 font-semibold my-2">Skills</h2>
          <div className="w-[100%] h-[0.25px] bg-gray-600"></div>
          <div className="flex md:flex-row flex-col mt-3">
            <p className="w-[19%] text-lg font-semibold">Languages: </p>
            <p className="ml-5">
              JavaScript, Typescript, HTML, CSS, Python, Solidity
            </p>
          </div>
          <div className="flex md:flex-row flex-col">
            <p className="w-[19%] text-lg font-semibold">Frameworks: </p>
            <p className="ml-5">ReactJS, NextJS, Tailwind, Prisma, Docker</p>
          </div>
          <div className="flex md:flex-row flex-col">
            <p className="w-[19%] text-lg font-semibold">Database: </p>
            <p className="ml-5">PostgreSQL, Firebase, MongoDB</p>
          </div>
          <div className="flex md:flex-row flex-col">
            <p className="w-[19%] text-lg font-semibold">Attributes:</p>
            <p className="ml-5">
              Exceptional Communication, Fast Learner, Patience
            </p>
          </div>
          {/* EXPERIENCE */}
          <h2 className="text-3xl text-gray-500 font-semibold my-2">
            Experience
          </h2>
          <div className="w-[100%] h-[0.25px] bg-gray-600" />
          <div className="flex">
            <p className="w-[50%] text-lg font-semibold">Techlab Tutor</p>
            <p className="w-[50%] text-right font-semibold text-gray-400">
              Holland, MI
            </p>
          </div>
          <div className="flex">
            <p className="w-[60%] font-semibold text-[16px] text-gray-600">
              Student Assistant - VanWylen Library
            </p>
            <p className="w-[40%] text-right text-sm font-semibold text-gray-400">
              Aug 2016 - Dec 2020
            </p>
          </div>
          <p className="text-sm text-gray-500">
            &bull; Guided students and professors through using new updates and
            software
          </p>
          <p className="text-sm text-gray-500 ml-5">
            &bull; Adobe Creative Suite, Office 365, audio mixing software, etc.
          </p>
          <p className="text-sm text-gray-500">
            &bull; Trained and took lead in workshops for new and current staff
            on frequently occurring additions to software
          </p>
          <div className="flex">
            <p className="w-[50%] text-lg font-semibold">TauSep</p>
            <p className="w-[50%] text-right font-semibold text-gray-400">
              Holland, MI (Remote)
            </p>
          </div>
          <div className="flex">
            <p className="w-[60%] font-semibold text-[16px] text-gray-600">
              Full Stack Contractor - Freelance
            </p>
            <p className="w-[40%] text-right text-sm font-semibold text-gray-400">
              Dec 2021 - Delayed
            </p>
          </div>
          <p className="text-sm text-gray-500">
            &bull; Built a landing page for a Hope College greek life
            organization
          </p>
          <p className="text-sm text-gray-500">
            &bull; Integrated a backend though prisma and PostgreSQL for an
            account verification system
          </p>
          <p className="text-sm text-gray-500">
            &bull; Authenticated accounts receive access to a live social media
            UI
          </p>
          <p className="text-sm text-gray-500">
            &bull; Utilized Compass API to create ease of payment for
            Organization dues
          </p>

          {/* PROJECTS */}
          <h2 className="text-3xl text-gray-500 font-semibold my-2">
            Projects
          </h2>
          <div className="w-[100%] h-[0.25px] bg-gray-600" />
          <div className="flex mt-3">
            <p className="w-[50%] text-lg font-semibold">MILactationCoach</p>
            <p className="w-[50%] text-right text-sm font-semibold text-gray-400">
              Aug 2020 - Dec 2020
            </p>
          </div>
          <p className="text-sm text-gray-500">
            &bull; Built UI components in AngularJS to digitize the journey of
            new motherhood
          </p>
          <p className="text-sm text-gray-500">
            &bull; Utilized firebase for storing hundreds of survey results
          </p>
          <div className="flex">
            <p className="w-[50%] text-lg font-semibold">Spotify Discover</p>
            <p className="w-[50%] text-right text-sm font-semibold text-gray-400">
              Oct 2021 - Delayed
            </p>
          </div>
          <p className="text-sm text-gray-500">
            &bull; Built a music discovery app using SwiftUI, SpotifyiOS
            framework, Python, and Spotipy
          </p>
          <p className="text-sm text-gray-500">
            &bull; Leveraging the Spotify API to access the Top 10 genres of a
            user and return a selection of tracks
          </p>
          <div className="flex">
            <p className="w-[50%] text-lg font-semibold">Live Chat</p>
            <p className="w-[50%] text-right text-sm font-semibold text-gray-400">
              June 2022
            </p>
          </div>
          <p className="text-sm text-gray-500">
            &bull; Built a functioning live chat application using MERN stack
          </p>
          <p className="text-sm text-gray-500">
            &bull; Leveraging MongoDB and ExpressJS to create a database for
            storing all existing chats and info
          </p>

          {/* INTERESTS */}
          <h2 className="text-3xl text-gray-500 font-semibold my-2">
            Interests
          </h2>
          <div className="w-[100%] h-[0.25px] bg-gray-600" />
          <p className="text-center mt-3">
            Skateboarding | Reading | Streaming | Vlogging | UI | Learning
          </p>
        </div>
      </div>
    </div>
  );
}
