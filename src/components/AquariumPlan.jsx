import { useState } from "react";
import "./AquariumPlan.css";

function AquariumPlan({ fish }) {
  const [dimensions, setDimensions] = useState({
    width: "",
    length: "",
    height: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDimensions({ ...dimensions, [name]: value });
  };

  const calculateVolume = () => {
    return (dimensions.width * dimensions.length * dimensions.height) / 1000;
  };

  const requiredVolume = fish.reduce(
    (total, f) => total + (f.size === "small" ? 10 : 20),
    0
  );
  const isValid = calculateVolume() >= requiredVolume;

  return (
    <div className="aquarium-container">
      <h2>Plánovač akvária</h2>
      <input
        type="number"
        name="width"
        placeholder="Šířka (cm)"
        onChange={handleChange}
      />
      <input
        type="number"
        name="length"
        placeholder="Délka (cm)"
        onChange={handleChange}
      />
      <input
        type="number"
        name="height"
        placeholder="Výška (cm)"
        onChange={handleChange}
      />
      <p>Požadovaný objem: {requiredVolume} L</p>
      <p>Objem akvária: {calculateVolume()} L</p>
      <button
        disabled={!isValid}
        className={isValid ? "approve-button valid" : "approve-button invalid"}
      >
        Schválit rozměry
      </button>
    </div>
  );
}

export default AquariumPlan;
