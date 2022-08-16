import React from "react";
import Head from "next/head";
import Resume from "./Resume";
import styled from "styled-components";
import { HomeButton } from "../../components/HomeButton";

const MainContainer = styled.div`
  width: 100vw;
  justify-content: center;
  padding-top: 5rem;
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
        <div className=" hidden md:flex justify-center lg:mt-6 mt-[10rem]">
          <button
            variant="contained"
            className="bg-Forest_Green hover:bg-Marine text-white rounded-md p-1 my-1"
          >
            <a download href="/BMResume.pdf">
              Download CV
            </a>
          </button>
        </div>
        <Resume />
      </MainContainer>
    </>
  );
};

export default index;
