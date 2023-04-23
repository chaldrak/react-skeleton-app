import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ count }) => {
  const cards = Array(count).fill(0);
  return cards.map((_, i) => (
    <div
      key={i}
      className="bg-gray px-5 sm:px-10 rounded-md py-5 flex items-center space-x-5 border w-full"
    >
      <Skeleton circle width={80} height={80} />
      <div className="w-[200px]">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  ));
};

export default CardSkeleton;
