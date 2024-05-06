export default function NationSelect({ chooseType }) {
  const types = ["fire", "grass", "water", "dark", "psychic"];

  return (
    <>
      <div className="typeSelectorContainer">
        <h2 className="title">Choose a Nation</h2>
        {types.map((type) => (
          <button key={type} onClick={() => chooseType(type)}>
            <img src={`./${type}.png`} alt={`${type}_icon`} />
            {type}
          </button>
        ))}
      </div>
    </>
  );
}
