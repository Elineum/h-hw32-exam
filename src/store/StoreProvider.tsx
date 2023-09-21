import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import logger from "redux-logger";
import currentSetupReducer from "./reducers/currentSetupReducer";
import ingredientsReducer from "./reducers/ingredientsReducer";
import templatesReducer from "./reducers/templatesReducer";
import portionsReducer from "./reducers/portionsReducer";
import baseReducer from "./reducers/baseReducer";
import { stateInitialSetter } from "./utils/stateChecker";
import initialStoreValue from "./initialStoreValue";
import { ReduxStore } from "../globalTypes/storeTypes";
import modalReducer from "./reducers/modalReducer";

type StoreProviderProps = {
  children: React.ReactNode;
};

const localStorage: Storage | null = window.localStorage;
const localData: string | null = localStorage.getItem("shopState");
const parsedData: ReduxStore =
  localData !== null ? JSON.parse(localData) : initialStoreValue;

export const store = configureStore({
  reducer: {
    base: baseReducer,
    ingredients: ingredientsReducer,
    portions: portionsReducer,
    templates: templatesReducer,
    currentSetup: currentSetupReducer,
    activeModal: modalReducer,
  },
  preloadedState: parsedData,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

stateInitialSetter();

store.subscribe(() => {
  const stringifyedState = JSON.stringify(store.getState());
  localStorage.setItem("shopState", stringifyedState);
});

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
