import React, { useState } from "react";

function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  const changeColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <div
        style={{
          width: "200px",
          padding: "20px",
          textAlign: "center",
          backgroundColor: isRed ? "red" : "blue",
          color: "white",
          borderRadius: "10px",
          marginBottom: "20px"
        }}
      >
        {isRed ? "Red" : "Blue"}
      </div>

      <button onClick={changeColor}>Toggle Color</button>
    </div>
  );
}

export default ColorToggle;
