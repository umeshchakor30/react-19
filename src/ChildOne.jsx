import { useState } from "react";
import React from "react";

const ChildOne = React.memo(({ handleName, name }) => {
  console.log("Child Rendered");
  return (
    <h1>
      Child
      <input type="text" onChange={handleName}></input>
    </h1>
  );
});

export default ChildOne;
