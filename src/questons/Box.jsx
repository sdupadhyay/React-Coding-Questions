import React from "react";
export default function Box() {
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
  const [checkedBox, setCheckedBox] = React.useState([]);
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
    <div className="flex justify-center items-center gap-4">
      <div className="p-4 bg-gray-200 rounded-lg w-48 flex flex-col gap-2">
        {boxA.map((ele) => (
          <InputCheckBox
            key={ele.id}
            value={ele.item}
            id={ele.id}
            checked={checkedBox.includes(ele.id)}
            handleChange={handleChange}
          />
        ))}
        <button
          onClick={() => handleClick(boxA, boxB, setBoxA, setBoxB, checkedBox)}
          className="border"
        >
          Move from A to B
        </button>
      </div>
      <div className="p-4 bg-gray-200 rounded-lg w-48 flex flex-col gap-2">
        {boxB.map((ele) => (
          <InputCheckBox
            key={ele.id}
            value={ele.item}
            id={ele.id}
            checked={checkedBox.includes(ele.id)}
            handleChange={handleChange}
          />
        ))}
        <button
          onClick={() => handleClick(boxB, boxA, setBoxB, setBoxA, checkedBox)}
          className="border"
        >
          Move from B to A
        </button>
      </div>
    </div>
  );
}
const InputCheckBox = ({
  value = "",
  id = "",
  checked = "",
  handleChange = () => {},
}) => {
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
