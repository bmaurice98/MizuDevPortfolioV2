import moment from "moment";
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";

// import { getComments } from "../../services";
import styled from "styled-components";

const Container = styled.div`
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  border-radius: 0.5%;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // getComments(slug).then((result) => setComments(result));
  }, [slug]);

  return (
    <>
      {comments.length > 0 && (
        <div className="transition duration-500 bg-Sleek_Gray shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 border-b pb-4 w-full">
            {comments.length} {comments.length > 1 ? "Comments" : "Comment"}
          </h3>
          {comments.map((comment) => (
            <div
              className=" border-b border-gray-100 mb-4 pb-4"
              key={comment.createdAt}
            >
              <p className="mb-4">
                <span className="tracking-normal">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-700  w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
