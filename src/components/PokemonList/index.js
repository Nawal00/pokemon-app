import PropTypes from "prop-types";
import "./style.css";

const PokemonList = ({ name, fetchPokemonInfo }) => {
  return (
    <div
      className="pokemon-list"
      role="list"
      key={name}
      onClick={() => fetchPokemonInfo(name)}
    >
      <h3>{name}</h3>
    </div>
  );
};

export default PokemonList;

PokemonList.propTypes = {
  name: PropTypes.string.isRequired,
  fetchPokemonInfo: PropTypes.func.isRequired,
};
