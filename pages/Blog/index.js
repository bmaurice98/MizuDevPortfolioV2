import { motion } from "framer-motion";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BigTitle from "../../components/BigTitle";
import { HomeButton } from "../../components/HomeButton";
import { LogoComponent } from "../../components/LogoComponent";
import ParticleComponent from "../../components/ParticleComponent";
import Slider from "../../components/Slider";
import { Socials } from "../../components/Socials";
import { getPosts } from "../../services";
import BlogComponent from "./BlogComponent";

const MainContainer = styled(motion.div)`
  width: 100vw;
  overflow: auto;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 0rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Blog = ({ posts }) => {
  const [progress, setProgress] = useState(0);

  const ref = useRef(null);
  useEffect(() => {
    const updateHeight = () => {
      if (!ref.current) return;

      const { height } = ref.current.getBoundingClientRect();
      console.log(height);

      setProgress(window.scrollY / (height - window.innerHeight));
    };
    console.log(progress);
    updateHeight();
    window.addEventListener("scroll", updateHeight());
    return () => {
      window.removeEventListener("scroll", updateHeight());
    };
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container ref={ref}>
        <HomeButton pos="fixed" />
        <LogoComponent />
        <Socials />
        <BigTitle left="5rem" top="5rem" text="BLOG" />
        <Slider progress={progress} />
        <ParticleComponent />
        <Center>
          <Grid>
            {posts?.length > 0 ? (
              posts.map((post) => (
                <>
                  <BlogComponent post={post.node} key={post.node.slug} />
                </>
              ))
            ) : (
              <h2>No Posts created as of yet</h2>
            )}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = (await getPosts()) || null;

  return {
    props: { posts },
    revalidate: 6000,
  };
}
