import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [radioOption, setRadioOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      isChecked,
      selectedOption,
      radioOption,
    });
  };

  return (
    <div>
      <h2>Sample Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            Check this box
          </label>
        </div>
        <div>
          <label htmlFor="selectedOption">Select an option:</label>
          <select
            id="selectedOption"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">-- Select an option --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div>
          <label>Choose a radio option:</label>
          <div>
            <label>
              <input
                type="radio"
                value="radioOption1"
                checked={radioOption === "radioOption1"}
                onChange={() => setRadioOption("radioOption1")}
              />
              Radio Option 1
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="radioOption2"
                checked={radioOption === "radioOption2"}
                onChange={() => setRadioOption("radioOption2")}
              />
              Radio Option 2
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
