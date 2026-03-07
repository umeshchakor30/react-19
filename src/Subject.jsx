import { useContext } from "react";
import { SubjectContext } from "./ContextData";

export function Subject() {
  return (
    <div style={{ backgroundColor: "red", padding: "20px" }}>
      <h1>Subject Component</h1>
    </div>
  );
}

export default Subject;
