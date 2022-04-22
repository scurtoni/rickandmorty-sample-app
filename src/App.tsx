import React from "react";
import { Provider } from "react-redux";

import configureStore from "./state";

import CharacterList from "./components/organisms/CharacterList";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <CharacterList />
    </Provider>
  );
};
export default App;
