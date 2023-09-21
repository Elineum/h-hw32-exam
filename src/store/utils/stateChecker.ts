import { ReduxStore } from "../../globalTypes/storeTypes";
import { fetchBase } from "../reducers/baseReducer";
import { fetchIngredients } from "../reducers/ingredientsReducer";
import { fetchPortionSize } from "../reducers/portionsReducer";
import { fetchTemplates } from "../reducers/templatesReducer";
import { store } from "../StoreProvider";

export const stateInitialSetter = async () => {
  const currentStore: ReduxStore = store.getState();
  const { base, ingredients, portions, templates } = currentStore;

  if (base.length < 2) {
    await store.dispatch(fetchBase());
  }

  if (ingredients.length < 2) {
    await store.dispatch(fetchIngredients());
  }

  if (portions.length < 2) {
    await store.dispatch(fetchPortionSize());
  }

  if (templates.length < 2) {
    await store.dispatch(fetchTemplates());
  }
};
