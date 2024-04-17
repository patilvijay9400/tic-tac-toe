import React from "react";

const Square = ({value, onClick}) => {
  return (
    <div className="square" onClick={onClick}>
          <h2>{value}</h2>
    </div>
  );
};

export default Square;
