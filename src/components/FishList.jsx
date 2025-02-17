import "./FishList.css";

function FishList({ data, onDelete }) {
  return (
    <div className="list">
      {data.map((fish) => (
        <div className="item" key={fish.id}>
          <span>
            {fish.name} / {fish.size === "small" ? "Malá (10l)" : "Velká (20l)"}
          </span>
          <button className="btn-delete" onClick={() => onDelete(fish.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default FishList;
