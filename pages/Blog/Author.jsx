import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 2rem 0 2rem 0;
  padding: 3rem;
  position: relative;
  border-radius: 0.5rem;
  background-color: #015249;
  width: 100%;

  & > h3 {
    color: white;
    margin: 1.5rem 0 1rem 0;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  & > p {
    color: white;
    font-size: 1.125rem /* 18px */;
    line-height: 1.75rem /* 28px */;
  }
`;

const Pic = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -3.5rem;
  padding-top: 1.25rem;
`;

const Author = ({ author }) => {
  if (!author) {
    return null;
  }

  return (
    <Container>
      <Pic>
        <Image
          src={author.photo.url}
          alt={author.name}
          height={100}
          width={100}
          unoptimized
        />
      </Pic>
      <h3>{author.name}</h3>
      <p>{author.bio}</p>
    </Container>
  );
};

export default Author;
