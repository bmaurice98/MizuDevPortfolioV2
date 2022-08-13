import { comment } from "postcss";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { submitComment } from "../../services";

const MainContainer = styled.div`
  background-color: gray;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  border-radius: 0.5rem /* 8px */;
  padding: 2rem 3rem 2rem 2rem /* 32px */;
  margin-bottom: 2rem /* 32px */;
  width: 100%;

  & > h3 {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    margin-bottom: 2rem /* 32px */;
    border-bottom-width: 1px;
    padding-bottom: 1rem /* 16px */;
  }
`;

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleSubmit = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { value: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <MainContainer>
      <h3 className="text-xl mb-8 border-b pb-4">Leave a Comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 ring-gray-200 bg-gray-100 text-gray-700 tracking-wide"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 ring-gray-200 bg-gray-100 text-gray-700 tracking-wide"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 ring-gray-200 bg-gray-100 text-gray-700 tracking-wide"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            type="checkbox"
            ref={storeDataEl}
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="text-gray-500 dark:text-gray-300 cursor-pointer ml-2 tracking-wide"
            htmlFor="storeData"
          >
            Remeber me
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All must be used.</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleSubmit}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Comment
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Submitted
          </span>
        )}
      </div>
    </MainContainer>
  );
};

export default CommentsForm;
