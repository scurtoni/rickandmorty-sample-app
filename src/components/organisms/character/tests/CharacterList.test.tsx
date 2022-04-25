import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { render, screen, fireEvent, act, waitFor, cleanup } from "@testing-library/react";

import CharacterList from "../CharacterList";
import configureStore from "../../../../state";

import api from "./../../../../utils/api";

let container;

afterEach(() => {
  cleanup;
});

const characterSearchMock = {
  info: {
    count: 826,
    pages: 42,
    next: "https://rickandmortyapi.com/api/character?page=3",
    prev: "https://rickandmortyapi.com/api/character?page=1"
  },
  results: [
    {
      id: 21,
      name: "Aqua Morty",
      status: "unknown",
      species: "Humanoid",
      type: "Fish-Person",
      gender: "Male",
      origin: {
        name: "unknown",
        url: ""
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/22"],
      url: "https://rickandmortyapi.com/api/character/21",
      created: "2017-11-04T22:39:48.055Z"
    }
  ]
};

describe("<CharacterList />", () => {
  it("allows to add and remove items", () => {
    act(() => {
      const store = configureStore();
      const requestAuthors = jest.spyOn(api, "characterSearch").mockImplementation(() => Promise.resolve(characterSearchMock));

      ReactDOM.createRoot(container).render(
        <Provider store={store}>
          <CharacterList />
        </Provider>
      );
    });

    // const renderedItems = await waitFor(() => screen.getByTestId("character-list"));

    // expect(renderedItems.innerHTML).toContain("Aqua Morty");
  });
});
