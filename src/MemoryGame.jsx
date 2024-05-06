/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function MemoryGame({ type }) {
  const [pokemon, setPokemon] = useState([]);
  const maxPokemon = 10;

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div
        className={`loading-spinner ${pokemon.length > 0 ? "hide" : ""}`}
      ></div>
      <div className="card-container">
        {pokemon.map((poke) => {
          return (
            <div key={poke.name} className="card">
              <img src={poke.imgUrl} alt={`${poke.name}`} />
              <p>{poke.name}</p>
            </div>
          );
        })}
        {console.log("fuck")}
      </div>
    </>
  );
}
