import { useEffect, useState } from "react";
import BaseCard from "../../components/base-card";
import CardSkeleton from "../../components/card-skeleton";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => {
          const newUsers = users.map((user, index) => ({
            ...user,
            icon: `https://picsum.photos/${100 + index * 50}`,
          }));
          console.log(newUsers);
          setUsers(newUsers);
          setIsLoading(false);
        });
    };
    setTimeout(fetchData, 3000);
  }, []);
  return (
    <div className="flex flex-col my-10 items-center">
      <h1 className="font-bold text-3xl mb-5">Users</h1>
      <div className="grid lg:grid-cols-2 gap-10">
        {isLoading && <CardSkeleton count={8} />}
        {users.map((user, index) => (
          <BaseCard user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
