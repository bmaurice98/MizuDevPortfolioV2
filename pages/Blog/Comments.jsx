import moment from 'moment';
import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';

import { getComments } from '../../services';


const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug)
      .then((result) => setComments(result))
  }, [slug])

  return (
    <>
      {comments.length > 0 && (
        <div className="transition duration-500 dark:bg-gray-600 bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 border-b pb-4">
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
              <p className="whitespace-pre-line dark:text-white text-gray-700 w-full">
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