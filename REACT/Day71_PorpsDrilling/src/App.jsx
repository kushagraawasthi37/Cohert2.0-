import React from "react";
import Card from "./components/Card";

const App = () => {
  const users = ["Kushagra", "Abhay", "Avneesh", "Udhay"];
  return (
    <div className="flex p-3 gap-2 justify-center items-center flex-col h-screen">
      {users.map((user, idx) => (
        <Card key={idx} user={user} />
      ))}
    </div>
  );
};

export default App;
