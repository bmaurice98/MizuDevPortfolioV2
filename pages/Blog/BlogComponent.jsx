import React from "react";
import PostCard from "./PostCard";
import Categories from "./Categories";
import PostWidget from "./PostWidget";
import { getPosts } from "../../services";

const BlogComponent = ({ posts }) => {
  return (
    <>
      <div className="container min-h-full mx-auto px-10 mb-3 lg:mt-10 mt-[5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts ? (
              posts?.map((post) => (
                <PostCard post={post.node} key={post.node.slug} />
              ))
            ) : (
              <h2 className="text-center items-center justify-center text-3xl">
                No Posts created as of yet
              </h2>
            )}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative lg:top-[4.5rem]">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogComponent;

export async function getStaticProps() {
  const posts = (await getPosts()) || null;

  return {
    props: { posts },
    revalidate: 6000,
  };
}
