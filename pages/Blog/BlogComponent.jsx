import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import PostCard from "./PostCard";
import moment from "moment";
import { motion } from "framer-motion";

const Container = styled(motion(Link))``;

const Box = styled(motion.div)`
  position: relative;
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid;
  ${(props) => props.theme.text}
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.4);
  text-align: center;
  cursor: pointer;

  z-index: 5;

  &:hover {
    color: #015249;
    background-color: ${(props) => props.theme.text};
    transition: all ease-in-out 0.3s;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
  text-align: center;
  cursor: pointer;
`;

const Tags = styled.div`
  padding: 0.5rem 0;
`;

const Date = styled.span`
  padding: 0.5rem 0;
`;

const Card = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const BlogComponent = ({ post }) => {
  if (!post) {
    return null;
  }

  const { title, author, categories, excerpt, slug, featuredImage, createdAt } =
    post;
  return (
    <Container href={"Post/" + slug} key={slug}>
      <Box variants={Card}>
        <Image img={featuredImage.url} alt="" />
        <Title>{title}</Title>
        <Tags>
          <Categories />
        </Tags>
        <Date>{moment(post.createdAt).format("MMM DD, YYYY")}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;
