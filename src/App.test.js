import { render, screen, act } from "@testing-library/react";
import App from "./App";

jest.spyOn(global, "fetch");
const generationId = 1;

describe("Given the `App` component", () => {
  beforeEach(async () => {
    fetch.mockResolvedValue({
      json: () =>
        Promise.resolve({
          pokemon_species: [{ name: "pikachu" }, { name: "ash" }],
        }),
    });
  });

  it("should render correctly", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("should request the correct url", async () => {
    await act(async () => render(<App />));

    expect(fetch).toHaveBeenCalledWith(
      `https://pokeapi.co/api/v2/generation/${generationId}`
    );
  });

  it("should have pokemon list rendered", async () => {
    await act(async () => render(<App />));

    expect(screen.getByText("pikachu")).toBeInTheDocument();
    expect(screen.getByText("ash")).toBeInTheDocument();
  });
});
