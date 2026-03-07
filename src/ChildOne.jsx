import { useState } from "react";

export default function ChildOne({ setUser, handleClick }) {
  return (
    <h1>
      Child One
      <input
        type="text"
        onChange={(event) => handleClick(event.target.value)}
      ></input>
    </h1>
  );
}
