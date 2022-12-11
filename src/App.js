import { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const hasPokemonInfoData = Object.keys(pokemonInfo).length > 0;

  const fetchPokemons = async () => {
    const generationId = 1;
    const url = `https://pokeapi.co/api/v2/generation/${generationId}`;

    try {
      const response = await fetch(url);
      const { pokemon_species } = await response.json();

      setPokemonList(pokemon_species);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPokemonInfo = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;

    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setPokemonInfo(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <h1>Generation One Pokemons</h1>
      <div className="container">
        <div className="pokemon-list-wrapper">
          {pokemonList?.map(({ name }) => (
            <PokemonList
              key={name}
              name={name}
              fetchPokemonInfo={fetchPokemonInfo}
            />
          ))}
        </div>
        {hasPokemonInfoData ? (
          <PokemonCard
            {...pokemonInfo}
            loading={loading}
            setPokemonInfo={setPokemonInfo}
          />
        ) : (
          <div className="info-message">
            <h3>Click on the pokemon name to view pokemon info</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
