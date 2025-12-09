import { useEffect, useState } from "react";

const Effect = () => {
  const [counter, setCounter] = useState(0);
  const [demonstration, setDemonstration] = useState("");
  useEffect(
    () => {
      // code that runs at least once GUARANTEED
      console.log(
        "THIS IS MY FIRST USEEFFECT IN ACTION with a count of: ",
        counter
      );

      // CLEANUP FUNCTION
      return () => {
        console.log("clean up function in action!!!");
      };
    },
    [counter, demonstration] // DEPENDENCY ARRAY
  );

  const handleAddAndSubtract = (title: "add" | "sub") => {
    // setDemonstration(title);
    if (title === "add") {
      setCounter((prev) => prev + 1);
    } else {
      setCounter((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  return (
    <div style={{ display: "flex", gap: 1, flexDirection: "column" }}>
      <p>Count: {counter}</p>
      <p>Demonstration: {demonstration}</p>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <button
          style={style}
          // onClick={handleAdd} // seperate functions
          onClick={() => handleAddAndSubtract("add")} //unified function
        >
          Add
        </button>
        <button
          style={style}
          //  onClick={handleSub} // seperate functions
          onClick={() => handleAddAndSubtract("sub")} // unified funciton
        >
          Subtract
        </button>
      </div>
    </div>
  );
};

export default Effect;

const style = {
  backgroundColor: "black",
  color: "white",
  borderRadius: 10,
  padding: "10px 20px",
};
