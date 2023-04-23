import React from "react";
import Skeleton from "react-loading-skeleton";

const PostCardSkeleton = ({ count }) => {
  const posts = Array(count).fill(0);
  return posts.map((_, i) => (
    <div key={i} className="w-full">
      <Skeleton width="50%" borderRadius={0} />
      <Skeleton borderRadius={0} />
      <Skeleton borderRadius={0} />
    </div>
  ));
};

export default PostCardSkeleton;
