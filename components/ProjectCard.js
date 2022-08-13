import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.li)`
  width: calc(22rem);
  height: 50vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;

const Head = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.5vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  display: flex;
  flex-wrap: wrap;
  padding-top: 0.5rem;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
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

const ProjectCard = (props) => {
  const { title, summary, description, tech, devices, link } = props.data;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Box variants={Card} key={title}>
        <Head>{title}</Head>
        <Description>{summary}</Description>
        <Tags>
          {tech.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </Tags>
      </Box>
    </a>
  );
};

export default ProjectCard;
