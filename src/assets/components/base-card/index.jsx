import { useNavigate } from "react-router-dom";

const BaseCard = ({ user }) => {
  const navigate = useNavigate();
  const Pic = "https://picsum.photos/200";
  return (
    <div
      className="bg-gray px-10 rounded-md py-5 flex items-center space-x-5 hover:opacity-50 cursor-pointer transition-colors border"
      onClick={() => navigate(`/users/${user.id}/post`)}
    >
      <img className="h-20 w-20 rounded-full" src={user.icon} alt="user" />
      <div className="">
        <h3 className="font-bold text-blue">{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
};

export default BaseCard;
