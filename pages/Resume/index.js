import React from "react";
import Head from "next/head";
import Resume from "./Resume";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  justify-content: center;
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
        <div className=" hidden md:flex justify-center lg:mt-6 mt-14">
          <button variant="contained">
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
