import { useContext } from "react";
import { Usercontext } from "../Context/Context";
import { useNavigate, useParams } from "react-router-dom";

const Userdetail = () => {
  const navgeate = useNavigate();
  const gohandle = () => {
    navgeate("/user");
  };
  const { user } = useContext(Usercontext);
  const { id } = useParams();
  return (
    <div>
      <h1>
        {user[id].username}
        {user[id].city}
      </h1>
      <button
        onClick={gohandle}
        className=" px-2 py-1 rounded-md text-yellow-50 bg-black"
      >
        go
      </button>
    </div>
  );
};

export default Userdetail;
