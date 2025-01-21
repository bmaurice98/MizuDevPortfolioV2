import React from "react";
import Head from "next/head";

import styled from "styled-components";
import { HomeButton } from "../../components/HomeButton";
import Link from "next/link";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Button } from "chakra-ui";

const MainContainer = styled.div`
  width: 100vw;
  justify-content: center;
  padding-top: 5rem;
`;

const BackButton = styled(motion.span)`
  position: fixed;
  left: 5%;
  top: 50%;
  cursor: pointer;
  z-index: 3;

  @media (max-width: 425px) {
    position: sticky;
    left: 2%;
    top: 50%;
  }
`;

const index = () => {
  return (
    <>
      <Head>
        <title>DevMizu Resume</title>
        <meta name="description" content="Resume and CV of DevMizu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <HomeButton pos="absolute" />
        <BackButton whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
          <Link href={"/Skills"}>
            <ArrowLeftIcon className="text-3xl hover:text-Forest_Green" />
          </Link>
        </BackButton>
        <div className=" hidden md:flex justify-center lg:mt-6 mt-[10rem]">
          <Button
            variant="contained"
            className="bg-Forest_Green hover:bg-Marine text-white rounded-md p-1 my-1"
          >
            <a download href="/BMResume2.pdf">
              Download CV
            </a>
          </Button>
        </div>
        <div className="relative m-auto bg-Resume md:w-[50%] py-1 shadow-lg w-[95%]">
          <div className="flex flex-col justify-center items-center my-5 mx-8">
            {/* HEADER */}
            <h1 className="text-center  text-5xl font-bold">
              <span className="font-normal text-gray-500">Brandon </span>Maurice
            </h1>
            <h2 className="text-gray-500 text-center">
              Los Angeles, California
            </h2>
            <h2 className="text-xs text-gray-600 text-center">
              (+1)323-2**-**** |{" "}
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
                <span className="hover:underline cursor-pointer">
                  devmizu.tech
                </span>
              </Link>{" "}
            </h2>
            <div className="flex flex-col">
              {/* EDUCATION */}
              {/* <h2 className="text-3xl text-gray-500 font-semibold my-2">
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
                <span className="text-black font-semibold">
                  &bull; Courses:{" "}
                </span>
                Web Design &amp; Implementation, database Systems, Algorithms
                &amp; Discrete Structures
              </p> */}
              {/* TECHNICAL SKILLS */}
              <h2 className="text-3xl text-gray-500 font-semibold my-2">
                Technical Skills
              </h2>
              <div className="w-[100%] h-[0.25px] bg-gray-600"></div>
              <div className="flex md:flex-row flex-col mt-3 w-full text-wrap">
                <p className="text-lg font-bold">Typescript/JavaScript</p>
                <p className="ml-2">
                  3 Years of building and deploying web applications
                </p>
              </div>
              <div className="flex md:flex-row flex-col">
                <p className=" text-lg font-bold">NoSql</p>
                <p className="ml-2">
                  Deployed multiple projects utilizing NoSQL Databases
                </p>
              </div>
              <div className="flex md:flex-row flex-col">
                <p className="text-lg font-bold">Technologies:</p>
                <p className="ml-2">
                  ReactJS/NextJS, MongoDB, HTML, CSS/SCSS, ExpressJS, Node,
                  Docker
                </p>
              </div>
              {/* <div className="flex md:flex-row flex-col">
                <p className="w-[19%] text-lg font-semibold">Attributes:</p>
                <p className="ml-5">
                  Exceptional Communication, Fast Learner, Patience
                </p>
              </div> */}
              {/* EXPERIENCE */}
              <h2 className="text-3xl text-gray-500 font-semibold my-2">
                Professional Experience
              </h2>
              <div className="w-[100%] h-[0.25px] bg-gray-600" />
              <div className="flex">
                <p className="w-[50%] text-lg font-semibold">Benduka Arts</p>
                <p className="w-[50%] text-right font-semibold text-gray-400">
                  Los Angeles, CA
                </p>
              </div>
              <div className="flex">
                <p className="w-[60%] font-semibold text-[16px] text-gray-600">
                  Full Stack Developer - Freelance
                </p>
                <p className="w-[40%] text-right text-sm font-semibold text-gray-400">
                  Nov 2022 - Feb 2024
                </p>
              </div>
              <p className="text-sm text-gray-500">
                &bull; Worked closely with the client to build a fully featured
                Art portfolio with a Storefront, Blog, Newsletter, and CMS
                Administrator Panel using the MERN Stack
              </p>
              <p className="text-sm text-gray-500 ml-5">
                &bull; Built over 10 Responsive UI Components and forms that
                cater to all website content
              </p>
              <p className="text-sm text-gray-500 ml-5">
                &bull; Integrated SID’s (Session ID’s) for all new visitors,
                creating a persistent data flow of returning visitors and unique
                visitors
              </p>
              <p className="text-sm text-gray-500 ml-5">
                &bull; Created a Built-in Newsletter allowing the client to
                contact all stored visitor emails in the event of new content
                releases
              </p>
              <p className="text-sm text-gray-500">
                &bull; Integrated a backend through MongoDB/Mongoose, Stripe,
                and Cloudinary
              </p>
              <p className="text-sm text-gray-500 ml-5">
                &bull; Developed MongoDB triggers to handle updates across to
                all products and pricing in a collection
              </p>
              <p className="text-sm text-gray-500 ml-5">
                &bull; Integrated product creation and a payment processing
                workflow utilizing StripeAPI for an easier optimization of all
                product pricing, payments, and invoices for the client
              </p>
              <p className="text-sm text-gray-500 ml-5">
                &bull; Leveraged a Cloud service for the storing of all new
                images
              </p>
              <div className="flex">
                <p className="w-[50%] text-lg font-semibold">Hotline Media</p>
                <p className="w-[50%] text-right font-semibold text-gray-400">
                  Los Angeles, CA
                </p>
              </div>
              <div className="flex">
                <p className="w-[60%] font-semibold text-[16px] text-gray-600">
                  Full Stack Developer - Freelance
                </p>
                <p className="w-[40%] text-right text-sm font-semibold text-gray-400">
                  Nov 2023 - Nov 2024
                </p>
              </div>
              <p className="text-sm text-gray-500">
                &bull; Participated in team meetings hosted by the founders of
                the company with the goal of determining website features,
                content, and administrative roles
              </p>
              <p className="text-sm text-gray-500">
                &bull; Built a design plan and began development using Webflow
                to the request of the client
              </p>
              <p className="text-sm text-gray-500 ml-5">
                &bull; Leveraged Webflow CMS to create a simpler method of
                creating new content and updating existing content on the site
              </p>
              <p className="text-sm text-gray-500 ml-5">
                &bull; Created custom features and UI components with Javascript
                and CSS
              </p>

              {/* PROJECTS */}
              <h2 className="text-3xl text-gray-500 font-semibold my-2">
                Projects
              </h2>
              <div className="w-[100%] h-[0.25px] bg-gray-600" />
              <div className="flex mt-3">
                <p className="w-[50%] text-lg font-semibold">
                  MILactationCoach
                </p>
                <p className="w-[50%] text-right text-sm font-semibold text-gray-400">
                  Aug 2020 - Dec 2020
                </p>
              </div>
              <p className="text-sm text-gray-500">
                &bull; Built UI components in AngularJS to digitize the journey
                of new motherhood
              </p>
              <p className="text-sm text-gray-500">
                &bull; Utilized firebase for storing hundreds of survey results
              </p>
              <div className="flex">
                <p className="w-[50%] text-lg font-semibold">
                  SpotifyGroupQueue
                </p>
                <p className="w-[50%] text-right text-sm font-semibold text-gray-400">
                  Oct 2021 - Dec 2022
                </p>
              </div>
              <p className="text-sm text-gray-500">
                &bull; Built a Spotify Web App to allow multiple users to cater
                the playlist of a listening party
              </p>
              <p className="text-sm text-gray-500 ml-5">
                &bull; Leveraging the Spotify API to allow users to access or
                host a listening party
              </p>
              <p className="text-sm text-gray-500 ml-5">
                &bull; Built a backend using MongoDB and NextAuth for storing
                user data and listening party information
              </p>
              {/* <div className="flex">
                <p className="w-[50%] text-lg font-semibold">Live Chat</p>
                <p className="w-[50%] text-right text-sm font-semibold text-gray-400">
                  June 2022
                </p>
              </div>
              <p className="text-sm text-gray-500">
                &bull; Built a functioning live chat application using MERN
                stack
              </p>
              <p className="text-sm text-gray-500">
                &bull; Leveraging MongoDB and ExpressJS to create a database for
                storing all existing chats and info
              </p> */}

              {/* Education */}
              <h2 className="text-3xl text-gray-500 font-semibold my-2">
                Interests
              </h2>
              <div className="w-[100%] h-[0.25px] bg-gray-600" />
              <p className="text-center mt-3">
                Skateboarding | Streaming | Bouldering | Surfi
              </p>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default index;
