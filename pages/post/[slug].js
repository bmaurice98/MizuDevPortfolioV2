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

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="cols-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="cols-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-14">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
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
