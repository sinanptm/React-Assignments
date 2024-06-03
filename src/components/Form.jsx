import React, { useState, } from "react";

const NameForm = () => {
  const [details, setDetails] = useState({ name: "", age: 0 });

  const handleNameChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleAgeChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      age: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(details.name.trim('')==='')return alert("Name can't be empty ")
    console.log("Name:", details.name, "age: ", details.age);
    setDetails({ name: "", age: 0 });
  };



  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Details</h2>
      Name
        <input
        className="Input"
          type="text"
          value={details.name}
          onChange={handleNameChange}
          placeholder="Name"
        /> 
      Age
      <input
      className="Input"
        type="number"
        name="age"
        onChange={handleAgeChange}
        value={details.age}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NameForm;
