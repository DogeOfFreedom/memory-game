/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Win from "./Win";
import Card from "./Card";

export default function MemoryGame({ reset, type }) {
  const [pokemon, setPokemon] = useState([]);
  const [current, setCurrent] = useState(0);
  const [best, setBest] = useState(0);
  const [selected, setSelected] = useState([]);
  const get = useRef(true);

<<<<<<< HEAD
  const maxPokemon = 3;
=======
  const maxPokemon = 1;
>>>>>>> 9dbb1902950b215b1c72209a4f7609046a2967d6

  if (get.current) {
    const getPokemon = async () => {
      const data = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const pkmnOfTypeData = (await data.json()).pokemon;
      const max = pkmnOfTypeData.length;
      const selectedPokemon = [];
      const indexes = [];
      for (let i = 0; i < maxPokemon; i++) {
        let index = Math.round(Math.random() * max);
        while (indexes.includes(index)) {
          index = Math.round(Math.random() * max);
        }
        indexes.push(index);
        let name = pkmnOfTypeData[index].pokemon.name;
        let pkmnUrl = pkmnOfTypeData[index].pokemon.url;
        const data = await (await fetch(pkmnUrl)).json();
        let imgUrl = data.sprites.front_default;
        let newPkmnObj = {
          name,
          imgUrl,
        };
        selectedPokemon.push(newPkmnObj);
      }
      setPokemon(selectedPokemon);
    };
    getPokemon();
    get.current = false;
  }

  useEffect(() => {
    // randomize items in array
    const shuffleArray = (arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      setPokemon(arr);
    };
    const array = [...pokemon];
    shuffleArray(array);
    setPokemon(array);
  }, [current]);

  const resetGet = () => {
    get.current = true;
  };

  return (
    <>
      {pokemon.length > 0 ? (
        <div className="score-container">
          <p className="current-score">Current Score: {current}</p>
          <p className="best-score">Best Score: {best}</p>
        </div>
      ) : (
        <div className="loading-spinner"></div>
      )}

      {current === maxPokemon ? (
        <Win
          reset={reset}
          resetGet={resetGet}
          setCurrent={setCurrent}
          setBest={setBest}
          setSelected={setSelected}
        />
      ) : null}

      <div className="card-container">
        {pokemon.map((poke) => {
          return (
            <Card
              key={poke.name}
              name={poke.name}
              url={poke.imgUrl}
              current={current}
              setCurrent={setCurrent}
              best={best}
              setBest={setBest}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>
    </>
  );
}
