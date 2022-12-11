import { render, screen, fireEvent } from "@testing-library/react";
import PokemonCard from "./";

const props = {
  name: "pikachu",
  height: 30,
  weight: 99,
  abilities: [{ ability: { name: "solar-flaire" } }],
  types: [{ type: { name: "wild" } }],
  sprites: {
    other: {
      dream_world: {
        front_default: "/test.svg",
      },
    },
  },
  setPokemonInfo: jest.fn(),
  loading: false,
};

describe("Given the `PokemonCard` component", () => {
  it("should render with correct props", () => {
    const { container } = render(<PokemonCard {...props} />);

    expect(container).toMatchSnapshot();
  });

  describe("When user clicks on close `x` button", () => {
    it("should call `setPokemonInfo` with correct params", () => {
      render(<PokemonCard {...props} />);

      const closeButton = screen.getByTestId("close-btn");

      fireEvent.click(closeButton);

      expect(props.setPokemonInfo).toHaveBeenCalledWith({});
    });
  });

  describe("When the `loading` prop is set to true", () => {
    it("should display a loading text", () => {
      render(<PokemonCard {...props} loading />);

      const loading = screen.getByText("Loading...");

      expect(loading).toBeInTheDocument();
    });
  });
});
