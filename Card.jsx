<div class="container">
  <div class="card">
    <h2>Simple Interest Calculator</h2>
    <input type="number" placeholder="Enter Amount" />
    <input type="number" placeholder="Enter Interest (%)" />
    <input type="number" placeholder="Enter Time (Years)" />
    <button>Calculate</button>
    <p class="result">Simple Interest: </p>
  </div>
</div>

<import { useState } from "react";

const InputCheck = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    console.log("Value:", inputValue);
    console.log("Type:", typeof inputValue);
    setValue(inputValue);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Enter something" />
      <p>Entered Value: {value}</p>
    </div>
  );
};

export default InputCheck;


import { useState } from "react";

const ConvertToNumber = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const stringValue = event.target.value;
    const numberValue = Number(stringValue); // Convert to number
    console.log("Original:", stringValue, "Type:", typeof stringValue);
    console.log("Converted:", numberValue, "Type:", typeof numberValue);
    setValue(numberValue);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Enter a number" />
      <p>Converted Value: {value}</p>
    </div>
  );
};

export default ConvertToNumber;
