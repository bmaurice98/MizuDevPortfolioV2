import React from "react";
import moment from "moment";
import styled from "styled-components";

const PostImage = styled.img`
  box-shadow: 0 4px 15px 0px ${(props) => `rgba(${props.theme.textRgba}, 0.25)`},
    0 -4px 15px 0px ${(props) => `rgba(${props.theme.textRgba}, 0.25)`},
    12px 0 15px -4px ${(props) => `rgba(${props.theme.textRgba}, 0.25)`},
    -12px 0 15px -4px ${(props) => `rgba(${props.theme.textRgba}, 0.25)`};
  margin: 1.5rem 0;
  border-radius: 5px;
`;

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-two":
        return (
          <h3 key={index} className="text-4xl font-light mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-3xl font-light mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8 font-serif text-lg">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-2xl font-light mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "heading-six":
        return (
          <h4 key={index} className="text-xl font-extralight mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  if (!post) {
    return null;
  }

  return (
    <>
      <div className="relative overflow-hidden shadow-md mb-6">
        <PostImage
          src={post.featuredImage.url || null}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex w-full text-center">
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
        <h1 className="mb-8 text-5xl text-center">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </>
  );
};

export default PostDetail;
