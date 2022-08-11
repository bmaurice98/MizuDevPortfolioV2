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

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: auto;
`;

const Container = styled.div`
  display: flex;
  width: 60vw;
  margin: auto auto;
  align-items: center;
`;

const PostComp = styled.div``;

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <MainContainer>
      <HomeButton />
      <LogoComponent />
      <Socials />
      <Container>
        <PostComp className="cols-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </PostComp>
        {/* <div className="cols-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-14">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div> */}
      </Container>
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
