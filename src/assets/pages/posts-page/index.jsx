import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostCard from "../../components/post-card";
import PostCardSkeleton from "../../components/card-skeleton/posts";

const PostsPage = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fecthPosts = () => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((res) => res.json())
        .then((posts) => {
          setPosts(posts);
          setIsLoading(false);
        });
    };
    setInterval(fecthPosts, 2000);
  }, [userId]);
  return (
    <div className="flex w-[600px] flex-col mx-auto items-center space-y-4 my-10 [&_h2]:font-bold [&_p]:text-grey">
      {!isLoading && <Link to="/">Back</Link>}
      {isLoading && <PostCardSkeleton count={10} />}
      {posts.map((post, index) => (
        <PostCard {...post} key={index} />
      ))}
    </div>
  );
};

export default PostsPage;
