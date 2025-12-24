import React from "react";
import Men from "./components/men";
import Women from "./components/Women";

const App = () => {
  const users = [
    {
      name: "Sarthak",
      age: 30,
      gender: "male",
    },
    {
      name: "XYXYXY",
      age: 22,
      gender: "female",
    },
  ];
  return (
    <div>
      {users.map((user) => {
        console.log(user);
        console.log(user.gender === "male");
        return user.gender === "male" ? (
          <Men user={user.name} />
        ) : (
          <Women user={user.name} />
        );
      })}
    </div>
  );
};

export default App;
