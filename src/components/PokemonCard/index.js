import PropTypes from "prop-types";
import "./style.css";

const PokemonCard = ({
  name,
  height,
  weight,
  abilities,
  types,
  sprites,
  setPokemonInfo,
  loading,
}) => {
  if (loading) return <p>Loading...</p>;

  return (
    <div className="pokemon-card-wrapper" data-testid="pokemon-card-wrapper">
      <div className="pokemon-card">
        <div>
          <h2>{name.toUpperCase()}</h2>
          <button
            className="close-btn"
            data-testid="close-btn"
            onClick={() => setPokemonInfo({})}
          >
            x
          </button>
        </div>
        <img
          src={sprites.other.dream_world.front_default}
          alt="a pokemon character"
        />
        <p>
          <b>Height:</b> {height} (decimetre)
        </p>
        <p>
          <b>Weight:</b> {weight} (hectogram)
        </p>
        <p>
          <b>Abilities:</b>
          {abilities.map(({ ability }) => (
            <button key={ability.name}>{ability.name}</button>
          ))}
        </p>
        <p>
          <b>Types:</b>
          {types.map(({ type }) => (
            <button key={type.name}>{type.name}</button>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.number,
  weight: PropTypes.number,
  abilities: PropTypes.arrayOf(
    PropTypes.shape({
      ability: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string,
      }),
    })
  ),
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string,
      }),
    })
  ),
  sprites: PropTypes.shape({
    other: PropTypes.shape({
      dream_world: PropTypes.shape({
        front_default: PropTypes.string,
      }),
    }),
  }),
  setPokemonInfo: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
