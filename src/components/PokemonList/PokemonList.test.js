import { render, screen, fireEvent } from "@testing-library/react";
import PokemonList from "./";

const props = {
  name: "pikachu",
  fetchPokemonInfo: jest.fn(),
};

describe("Given the `PokemonList` component", () => {
  it("should render with correct props", () => {
    const { container } = render(<PokemonList {...props} />);

    expect(container).toMatchSnapshot();
  });

  describe("When user clicks on a pokemon name", () => {
    it("should call `fetchPokemonInfo` with correct params", () => {
      render(<PokemonList {...props} />);

      const pokemon = screen.getByRole("list");

      fireEvent.click(pokemon);

      expect(props.fetchPokemonInfo).toHaveBeenCalledWith("pikachu");
    });
  });
});
