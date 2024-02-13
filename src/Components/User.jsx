import { useContext } from "react";
import { Link } from "react-router-dom";
import { Usercontext } from "../Context/Context";

const User = () => {
  const { user } = useContext(Usercontext);

  return (
    <div>
      <h1 className=" text-3xl">USER LIST</h1>
      <div className=" flex w-1/2 flex-col mt-10">
        {user.map(u => (
          <Link
            key={u.id}
            to={`/user/${u.id}`}
            className=" mb-3 bg-red-100 p-3"
          >
            {u.username}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
