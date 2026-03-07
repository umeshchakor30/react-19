import { Subject } from "./Subject";
import { useContext } from "react";
import { SubjectContext } from "./ContextData";

export function Student() {
  const subject = useContext(SubjectContext);
  return (
    <div style={{ backgroundColor: "green", padding: "20px" }}>
      <h1>Student Component: {subject}</h1>
      <Subject></Subject>
    </div>
  );
}

export default Student;
