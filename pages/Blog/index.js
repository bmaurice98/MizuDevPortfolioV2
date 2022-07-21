import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { HomeButton } from "../../components/HomeButton";
import { LogoComponent } from "../../components/LogoComponent";
import { Socials } from "../../components/Socials";
import BlogComponent from "./BlogComponent";

const MainContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const Blog = () => {
  return (
    <>
      <Head>
        <title>DevMizu Blog</title>
        <meta
          name="description"
          content="Conglomerations of my thoughts and interests, expressed throughout blogs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Container>
          <HomeButton />
          <LogoComponent />
          <Socials />
          <Center>
            <Grid>
              <BlogComponent />
            </Grid>
          </Center>
        </Container>
      </MainContainer>
    </>
  );
};

export default Blog;
