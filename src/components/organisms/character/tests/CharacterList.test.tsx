import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { render, screen, fireEvent, act, waitFor, cleanup } from "@testing-library/react";

import CharacterList from "../CharacterList";
import CharacterCard from "../../../molecules/character/CharacterCard";
import configureStore from "../../../../state";

import api from "./../../../../utils/api";

import characterSearchMock from "./../mocks/characterList";

import characterLocationMock from "./../mocks/characterLocation";

import characterEpisodesMock from "./../mocks/characterEpisodes";

import characterItem from "./../mocks/characterItem";

// afterEach(() => {
//   cleanup;
// });

const store = configureStore();

describe("<CharacterList />", () => {
  it("load and list characters", () => {
    act(() => {
      const requestAuthors = jest.spyOn(api, "characterSearch").mockImplementation(() => Promise.resolve(characterSearchMock));

      //   render(
      //     <Provider store={store}>
      //       <CharacterList />
      //     </Provider>
      //   );
      // });

      // const renderedItems = await waitFor(() => screen.getByTestId("character-list"));

      // expect(renderedItems.innerHTML).toContain("Aqua Morty");
    });
  });
});

describe("<CharacterCard />", () => {
  it("load character details", () => {
    act(() => {
      const requestLocation = jest.spyOn(api, "locationSearch").mockImplementation(() => Promise.resolve(characterLocationMock));

      const requestEpisodes = jest.spyOn(api, "episodeSearch").mockImplementation(() => Promise.resolve(characterEpisodesMock));

      //   render(
      //     <Provider store={store}>
      //       <CharacterCard character={characterItem}/>
      //     </Provider>
      //   );
      // });

      // const details = screen.getByTestId("details");
      // const detailsBtn = screen.getByText("DETAILS");

      // fireEvent.click(detailsBtn);

      //expect(details.innerHTML).toContain("Lawnmower Dog");
    });
  });
});
