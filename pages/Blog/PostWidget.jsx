import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../../services";
import Image from "next/image";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug, categories]);

  return (
    <>
      <div className="transition duration-500 dark:bg-gray-600 bg-white shadow-lg rounded-lg p-8 mb-8">
        <h3 className="text-xl mb-8 border-b pb-4 tracking-wide text-gray-700 dark:text-white transiton duration-300">
          {slug ? "Related posts" : "Recent Posts"}
        </h3>
        {relatedPosts.map((post) => (
          <div className="flex items-center w-full mb-4" key={post.title}>
            <div className="w-16 flex-none">
              <Image
                src={post.featuredImage.url}
                alt={post.title}
                width="60px"
                height="60px"
                className="align-middle rounded-full"
              />
            </div>
            <div className="flex-grow ml-4 ">
              <p className="text-gray-500 font-xs">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <div className="text-gray-700 dark:text-white">
                <Link
                  href={`/post/${post.slug}`}
                  key={post.title}
                  className="text-md "
                >
                  {post.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostWidget;
