import { comment } from "postcss";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { submitComment } from "../../services";

const MainContainer = styled.div`
  width: 100%;
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
  color: white;

  & > h3 {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    margin-bottom: 2rem /* 32px */;
    border-bottom-width: 1px;
    padding-bottom: 1rem /* 16px */;
    width: 100%;
  }

  & > * label {
    margin-left: 0.5rem;
  }

  & > p {
    font-size: 0.75rem /* 12px */;
    line-height: 1rem /* 16px */;
    color: #ff0c0cec;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem /* 16px */;
  outline: 2px solid transparent;
  outline-offset: 2px;
  width: 100%;
  letter-spacing: 0.025em;
  border-radius: 0.5rem /* 8px */;
  color: gray;

  &:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
      var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    --tw-ring-color: rgb(229, 231, 235);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 #0000);
  }
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem /* 16px */;
  margin: 0.5rem 0 /* 16px */;

  & > input {
    width: 100%;
    padding: 0.5rem 1rem 0.5rem 1rem;
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-radius: 0.5rem /* 8px */;
    color: gray;
    letter-spacing: 0.025em;
  }
`;

const Confirmation = styled.div`
  margin-top: 1rem;
  & > button {
    display: inline-block;
    background-color: #015249;
    padding: 0.35rem 0.5rem 0.35rem 0.5rem;
    font-size: 1.125rem /* 18px */;
    line-height: 1.75rem /* 28px */;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: #57bc90;
    }
    &:active {
      -webkit-box-shadow: inset 0 1px 1px #77c9d4, inset 0 8px 16px -4px #77c9d4,
        inset 0 -1px 1px #77c9d4;
    }
  }

  & > span {
    margin-top: 0.75rem /* 12px */;
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    font-weight: 600;
    color: #00b83a;
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
        <TextArea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 ring-gray-200 bg-gray-100 text-gray-700 tracking-wide"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <InputContainer>
        <input type="text" ref={nameEl} placeholder="Name" name="name" />
        <input type="text" ref={emailEl} placeholder="Email" name="email" />
      </InputContainer>
      <InputContainer className="grid grid-cols-1 gap-4 mb-4">
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
            Remember me
          </label>
        </div>
      </InputContainer>
      {error && <p className="text-xs text-red-500">All must be used.</p>}
      <Confirmation className="mt-8">
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
      </Confirmation>
    </MainContainer>
  );
};

export default CommentsForm;
