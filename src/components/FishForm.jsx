import { useState } from "react";
import "./FishForm.css";

function FishForm({ data, onAdd }) {
  const [newFish, setNewFish] = useState({
    id: data.length > 0 ? Math.max(...data.map((fish) => fish.id)) + 1 : 1,
    name: "",
    size: "small",
  });
  const [valid, setValid] = useState(false);

  const validateData = (fish) => {
    if (fish.name.trim().length === 0) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFish = { ...newFish, [name]: value };

    setNewFish(updatedFish);
    validateData(updatedFish);
  };

  const resetNewFish = () => {
    const temp = {
      id: newFish.id + 1,
      name: "",
      size: "small",
    };
    setNewFish(temp);
    validateData(temp);
  };

  return (
    <div className="fish-form">
      <input
        type="text"
        placeholder="Jméno rybičky"
        name="name"
        onChange={handleChange}
        value={newFish.name}
      />
      <select name="size" onChange={handleChange} value={newFish.size}>
        <option value="small">Malá (10l)</option>
        <option value="large">Velká (20l)</option>
      </select>
      <button
        disabled={!valid}
        onClick={() => {
          onAdd(newFish);
          resetNewFish();
        }}
      >
        Přidat rybu
      </button>
    </div>
  );
}

export default FishForm;
