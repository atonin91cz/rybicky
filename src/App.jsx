import { useState } from "react";
import "./App.css";
import FishList from "./components/FishList";
import FishForm from "./components/FishForm";
import AquariumPlan from "./components/AquariumPlan";
function App() {
  const [listOfFish, setListOfFish] = useState([
    { id: 1, name: "Pstruh", size: "small" },
    { id: 2, name: "Kapr", size: "small" },
    { id: 3, name: "Žralok", size: "large" },
    { id: 4, name: "Červena ryba", size: "large" },
  ]);
  const [activeTab, setActiveTab] = useState(1);

  const handleDelete = (idToDel) => {
    setListOfFish(listOfFish.filter((fish) => fish.id !== idToDel));
  };

  const handleAdd = (fishToAdd) => {
    setListOfFish([...listOfFish, fishToAdd]);
  };

  return (
    <div className="page-container">
      <div className="page-toggler">
        <button
          class="btn1"
          className={activeTab === 1 ? "active" : ""}
          onClick={() => setActiveTab(1)}
        >
          Seznam rybiček
        </button>
        <button
          class="btn2"
          className={activeTab === 2 ? "active" : ""}
          onClick={() => setActiveTab(2)}
        >
          Akvárium
        </button>
      </div>
      {activeTab === 1 && (
        <>
          <FishList data={listOfFish} onDelete={handleDelete} />
          <FishForm data={listOfFish} onAdd={handleAdd} />
        </>
      )}
      {activeTab === 2 && <AquariumPlan fish={listOfFish} />}
    </div>
  );
}

export default App;
