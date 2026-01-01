import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const decrement = () => {
    setNum((prev) => prev - 1);
  };
  const increment = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1>{num}</h1>
        <button
          onClick={() => {
            decrement();
          }}
          className="m-4 px-4 py-2 bg-yellow-400 rounded-sm "
        >
          Decrement
        </button>
        <button
          onClick={() => {
            increment();
          }}
          className=" px-4 py-2 bg-red-400 rounded-sm "
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;
