import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, rootSaga } from "./features/index";
import sagaMiddleware from "./middlewares/saga.middleware";
import reduxMiddleware from "./middlewares/redux.middleware";

//TODO integrate history

const middleware = [...reduxMiddleware, sagaMiddleware];

export default () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware
    //  preloadedState,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
