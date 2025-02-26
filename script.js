import React, { useState } from "react";

function ToggleDiv() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Div
      </button>
      
      {isVisible && (
        <div
          style={{
            width: "300px",
            height: "200px",
            backgroundColor: "lightgray",
            textAlign: "center",
            lineHeight: "200px",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          Hello, I am a Div!
        </div>
      )}
    </div>
  );
}

export default ToggleDiv;



import React, { useState } from "react";

function DynamicDiv() {
  const [contentIndex, setContentIndex] = useState(0);

  // Different content options
  const contentList = [
    "Welcome to my dynamic div!",
    "Here is the second content.",
    "You have reached the third content.",
    "Final content, what's next?"
  ];

  // Function to change content dynamically
  const changeContent = () => {
    setContentIndex((prevIndex) => (prevIndex + 1) % contentList.length);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={changeContent}>Change Content</button>

      <div
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: "lightgray",
          textAlign: "center",
          lineHeight: "200px",
          fontSize: "20px",
          marginTop: "20px",
          transition: "all 0.5s ease"
        }}
      >
        {contentList[contentIndex]}
      </div>
    </div>
  );
}

export default DynamicDiv;
