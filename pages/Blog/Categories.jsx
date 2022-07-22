import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getCategories } from "../../services";
import styled from "styled-components";

const Container = styled.div`
  padding: 0.2rem 0.2rem;
  margin: 0 auto;
  border-radius: 10%;
  background-color: ${(props) => props.theme.body};
  cursor: pointer;
`;

const MainContainer = styled.div`
  display: inline-flex;
  width: 100%;
`;

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    // try to communicate with server API
    getCategories()
      .then((newCategories) => setCategories(newCategories))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Successfully aborted");
        } else {
          setError(err);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <MainContainer>
      {categories.map((category) => (
        <Container key={category.slug}>
          <Link href={`/category/${category.slug}`} passHref>
            <span>{category.name}</span>
          </Link>
        </Container>
      ))}
    </MainContainer>
  );
};

export default Categories;
