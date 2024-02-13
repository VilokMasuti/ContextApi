import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";
import About from "./Components/About";
import Userdetail from "./Components/Userdetail";

function App() {
  return (
    <div>
      <nav className=" flex gap-6 justify-center ">
        <Link to="/Home">Home </Link>
        <Link to="/User">User </Link>
        <Link to="/About">About </Link>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/User" element={<User />}></Route>
        <Route path="/User/:id" element={<Userdetail />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
