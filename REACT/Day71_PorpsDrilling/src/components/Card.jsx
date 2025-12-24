import React from "react";

const Card = (props) => {
  return (
    <div className="font-light text-md text-center h-10 w-20 flex justify-center items-center border-black rounded-md bg-amber-50 text-black">
      {props.user}
    </div>
  );
};

export default Card;
