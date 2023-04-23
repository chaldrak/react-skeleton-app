import React from "react";

const PostCard = ({ title, body }) => {
  return (
    <div>
      <h2 className="w-full">📃 {title}</h2>
      <p className="w-full text-justify">{body}</p>
    </div>
  );
};

export default PostCard;
