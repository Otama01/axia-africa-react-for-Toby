const State2 = () => {
  return (
    <div style={{ display: "flex", gap: 1, flexDirection: "column" }}>
      <p>Count: </p>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <button style={style}>Add</button>
        <button style={style}>Subtract</button>
      </div>
    </div>
  );
};

export default State2;

const style = {
  backgroundColor: "black",
  color: "white",
  borderRadius: 10,
  padding: "10px 20px",
};
