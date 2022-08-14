import React from "react";
import { useRouter } from "next/dist/client/router";
import { getPosts, getPostDetails } from "../../services";
import PostDetail from "../Blog/PostDetail";
import Author from "../Blog/Author";
import Comments from "../Blog/Comments";
import CommentsForm from "../Blog/CommentsForm";
import PostWidget from "../Blog/PostWidget";
import Categories from "../Blog/Categories";
import Loader from "../Blog/Loader";
import styled from "styled-components";
import { Socials } from "../../components/Socials";
import { LogoComponent } from "../../components/LogoComponent";
import { HomeButton } from "../../components/HomeButton";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 1)`};
  width: 100vw;
  height: auto;
`;

const Container = styled.div`
  background-color: #015249;
  box-shadow: 12px 0 15px -4px ${(props) => `rgba(${props.theme.textRgba}, 0.25)`},
    -12px 0 8px -4px ${(props) => `rgba(${props.theme.textRgba}, 0.25)`};
  border-radius: 0 0 10px 10px;
  color: white;
  display: flex;
  width: 60vw;
  margin: auto auto;
  align-items: center;
  padding-top: 5rem;
`;

const ContainerLower = styled.div`
  border-radius: 0 0 10px 10px;
  display: flex;
  width: 60vw;
  height: 100%;
  margin: 2rem auto;
  align-items: center;
  flex-direction: column;
`;

const PostComp = styled.div`
  padding: 0.5rem 2rem;
`;

const BackButton = styled(motion.span)`
  position: fixed;
  left: 10%;
  top: 50%;
  cursor: pointer;
`;

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <MainContainer>
      <HomeButton pos="absolute" />
      <LogoComponent />
      <Socials />
      <BackButton whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
        <Link href={"/Blog"}>
          <ArrowLeftIcon className="text-3xl hover:text-Forest_Green" />
        </Link>
      </BackButton>
      <Container>
        <PostComp>
          <PostDetail post={post} />
        </PostComp>
      </Container>
      <ContainerLower>
        <Author author={post.author} />
        <CommentsForm slug={post.slug} />
        <Comments slug={post.slug} />
      </ContainerLower>
      {/* <div className="cols-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-14">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div> */}
    </MainContainer>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
