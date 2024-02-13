import { createContext, useState } from "react";
export const Usercontext = createContext();

const Context = Props => {
  const [user, setUser] = useState([
    {
      id: 0,
      username: "Krishan",
      city: "Dwarak",
    },
    {
      id: 1,
      username: "shiva",
      city: "Kiylasha",
    },
    {
      id: 2,
      username: "shani",
      city: "karm",
    },
  ]);
  return (
    <Usercontext.Provider value={{ user, setUser }}>
      {Props.children}
    </Usercontext.Provider>
  );
};

export default Context;
