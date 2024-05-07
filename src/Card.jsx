export default function Card({
  name,
  url,
  current,
  setCurrent,
  best,
  setBest,
  selected,
  setSelected,
}) {
  const selectCard = () => {
    if (!selected.includes(name)) {
      setCurrent(current + 1);
      if (current + 1 > best) {
        setBest(current + 1);
      }
      const newSelected = [...selected, name];
      setSelected(newSelected);
    } else {
      setCurrent(0);
      setSelected([]);
    }
  };

  return (
    <div key={name} className="card" onClick={selectCard}>
      <img src={url} alt={`${name}`} />
      <p>{name}</p>
    </div>
  );
}
