import Head from "next/head";

import styled from "styled-components";
import { HomeButton } from "../../../MizuPortfolioV2/components/HomeButton";
import Link from "../../../MizuPortfolioV2/node_modules/next/link";
import { motion } from "../../../MizuPortfolioV2/node_modules/framer-motion";
// import { ArrowLeftIcon } from "@chakra-ui/icons";

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
          {/* <Link href={"/Skills"}>
            <ArrowLeftIcon className="text-3xl hover:text-Forest_Green" />
          </Link> */}
        </BackButton>
        <div className=" hidden md:flex justify-center lg:mt-6 mt-[10rem]">
          <button
            // variant="contained"
            className="bg-Forest_Green hover:bg-Marine text-white rounded-md p-1 my-1"
          >
            <a download href="/BMWebResume.pdf">
              Download CV
            </a>
          </button>
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
              {/* SKILLS */}
              <h2 className="text-3xl text-gray-500 font-semibold my-2">
                Skills
              </h2>
              <div className="w-[100%] h-[0.25px] bg-gray-600"></div>
              <div className="flex md:flex-row flex-col mt-3">
                <p className="w-[19%] text-lg font-semibold">Video: </p>
                <p className="ml-5">
                  Adobe Premier, After Effects, Davinci Resolve
                </p>
              </div>
              <div className="flex md:flex-row flex-col">
                <p className="w-[19%] text-lg font-semibold">Graphics: </p>
                <p className="ml-5">
                  Adobe Illustrator, Photoshop, InDesign, Figma
                </p>
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
                <p className="w-[50%] text-lg font-semibold">Mizupiku</p>
              </div>
              <div className="flex">
                <p className="w-[60%] font-semibold text-[16px] text-gray-600">
                  Youtube Channel
                </p>
              </div>
              <p className="text-sm text-gray-500">
                &bull; Took clips from my stream and created content using Adobe
                After Effects and Premier Pro.
              </p>
              <p className="text-sm text-gray-500">
                &bull; Created thumbnails using both Adobe Illustrator and
                Photoshop.
              </p>
              <div className="flex">
                <p className="w-[50%] text-lg font-semibold">
                  Zwayzy (Musician)
                </p>
              </div>
              <div className="flex">
                <p className="w-[60%] font-semibold text-[16px] text-gray-600">
                  Freelance Editor
                </p>
              </div>
              <p className="text-sm text-gray-500">
                &bull; Created multiple designs for singles to be released
                across all music streaming platforms
              </p>
              <p className="text-sm text-gray-500">
                &bull; Worked closely with the musician to reach a product that
                pleased all parties involved
              </p>
              <p className="text-sm text-gray-500">
                &bull; Created a promotional video for the single SNAPPI
              </p>

              {/* PROJECTS */}
              <h2 className="text-3xl text-gray-500 font-semibold my-2">
                Projects
              </h2>
              <div className="w-[100%] h-[0.25px] bg-gray-600" />
              <div className="flex mt-3">
                <p className="w-[50%] text-lg font-semibold">Web Portfolio</p>
              </div>
              <p className="text-sm text-gray-500">
                &bull; Built a website to display my works as a developer and
                passions as a content creator
              </p>
              <p className="text-sm text-gray-500">
                &bull; Built using the NextJS framework, chakraUI, styled
                components, and framer motion for user interface display, as
                well as graphQL for a blog.
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
      </MainContainer>
    </>
  );
};

export default index;
