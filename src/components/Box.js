import React from "react";

function Box(props) {
  const selectBox = () => {
    props.selectBox(props.row, props.col);
  };

  return (
    <div
      className={props.boxClass}
      id={props.boxId}
      onClick={
        props.gameOn
          ? () => alert("Click disabled while game is running")
          : selectBox
      }
    ></div>
  );
}

export default Box;
