import  { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("white");

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <main className="App">
      <div className="color" style={{ backgroundColor: color }}>
        {color ? color : "Empty"}
      </div>
      <input
        onChange={changeColor}
        type="text"
        placeholder="Add Color"
      />
    </main>
  );
};

export default ColorChanger;
