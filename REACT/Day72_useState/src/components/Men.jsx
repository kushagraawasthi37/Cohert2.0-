import React from "react";

const Men = (props) => {
  console.log(props);
  return (
    <div>
      <h1 className="bg-blue-400">hey {props.user} this is ladies Washroom</h1>
    </div>
  );
};

export default Men;
