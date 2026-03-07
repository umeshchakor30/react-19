function Wrapper({ children, color = "blue" }) {
  return (
    <div
      style={{
        color: color,
        width: "900px",
        border: "5px solid green",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
