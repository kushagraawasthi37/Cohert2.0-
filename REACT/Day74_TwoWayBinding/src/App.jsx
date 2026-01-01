import React, { useState } from "react";

const App = () => {
  const [alluser, setAllUser] = useState([]);
  const [text, setText] = useState("");
  const textHandler = (e) => {
    console.log(text);
    setText(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setAllUser((prev) => [...prev, text]);
    setText("");
    console.log("Form Submitted");
  };
  return (
    <div className="pb-10">
      <form
        onSubmit={(e) => {
          formSubmit(e);
        }}
        className="bg-red-600  flex justify-center items-center gap-2 flex-col px-5 mx-5 my-5 py-4
        "
      >
        <input
          type="text"
          value={text}
          onChange={(e) => {
            textHandler(e);
          }}
          className="bg-gray-500  border-2 "
          required
        />
        <button type="submit">Submit</button>
      </form>

      <div className="px-10 py-10 mx-10 my-10 bg-[#9d7070]">
        {alluser.map(
          (user) => `
        Hii ${user}`
        )}
      </div>
    </div>
  );
};

export default App;
