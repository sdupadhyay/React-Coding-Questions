import React from "react";
import { useState } from "react";
import Box from "./questons/Box";
function App() {
  const boxAData = [
    { item: "Pen", id: 1 },
    { item: "Pencil", id: 2 },
    { item: "Eraser", id: 3 },
  ];
  const boxBData = [
    { item: "Keyboard", id: 4 },
    { item: "Mouse", id: 5 },
    { item: "Monitor", id: 6 },
  ];
  const [boxA, setBoxA] = React.useState(boxAData);
  const [boxB, setBoxB] = React.useState(boxBData);
  const [checkedBox, setCheckedBox] = useState([]);
  const handleChange = (e, id) => {
    if (checkedBox.includes(id)) {
      setCheckedBox(checkedBox.filter((ele) => ele !== id));
    } else {
      setCheckedBox([...checkedBox, id]);
    }
  };
  const handleClick = (
    sourceBox,
    targetBox,
    setSourceBox,
    setTargetBox,
    checkedBox
  ) => {
    const itemToMove = sourceBox?.filter((ele) => checkedBox.includes(ele.id));
    const remainingItems = sourceBox?.filter(
      (ele) => !checkedBox.includes(ele.id)
    );
    setSourceBox(remainingItems);
    setTargetBox([...targetBox, ...itemToMove]);
    setCheckedBox([]);
  };
  return (
    <>
      <Box />
    </>
  );
}
const InputCheckBox = ({ value, id, checked, handleChange }) => {
  return (
    <>
      <input
        type="checkbox"
        //id="checkbox1"
        name={value}
        value={value}
        className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out"
        checked={checked}
        onChange={(e) => handleChange(e, id)}
      />
      <label>{value}</label>
    </>
  );
};
export default App;
