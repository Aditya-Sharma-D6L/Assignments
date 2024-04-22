import React, { useState } from "react";

function App() {
  const [isBlackBackground, setIsBlackBackground] = useState(false);

  const handleChange = () => {
    setIsBlackBackground(!isBlackBackground); // Toggle background color
  };

  return (
    <div>
      <button onClick={handleChange}>
        {isBlackBackground
          ? "Change to White Background"
          : "Change to Black Background"}
      </button>
      <div
        style={{
          backgroundColor: isBlackBackground ? "black" : "white",
          height: "100vh",
        }}
      ></div>
    </div>
  );
}

export default App;
