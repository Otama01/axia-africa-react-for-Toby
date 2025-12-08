const State2 = () => {
  // Create a state called counter and update the value pending the button clicked...
  // (when add is clicked add 1, when subtract is clicked, subtract 1)

  // Additional Point => Ensure that your counter does not go below 0

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
