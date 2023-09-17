import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import baseReducer from "./reducers/baseReducer";
import ingredientsReducer from "./reducers/ingredientsReducer";
import logger from "redux-logger";

type StoreProviderProps = {
  children: React.ReactNode;
};

const localStorage: Storage | null = window.localStorage;
const localData: string | null = localStorage.getItem("shopState");
const parsedData: object =
  localData !== null
    ? JSON.parse(localData)
    : {
        base: [],
        ingredients: [],
      };

const store = configureStore({
  reducer: {
    base: baseReducer,
    ingredients: ingredientsReducer,
  },
  preloadedState: parsedData,
  middleware: [logger],
});

store.subscribe(() => {
  const stringifyedState = JSON.stringify(store.getState());
  localStorage.setItem("shopState", stringifyedState);
});

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
