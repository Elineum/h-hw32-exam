import React from "react";
import { RemoveFunction } from "./ConstructorIngredientBlock";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ReduxStore } from "../../globalTypes/storeTypes";
import { ChangeIngredientFunc } from "./Constructor";

type ConstructorIngredientprops = {
  id: string;
  fieldId: string;
  removeFunc: RemoveFunction;
  changeIngredientFunc: (
    { fieldId, ingredientId }: ChangeIngredientFunc,
    ingredientType: string
  ) => void;
};

export const ConstructorIngredient: React.FC<ConstructorIngredientprops> = ({
  id: ingredientId,
  fieldId,
  removeFunc,
  changeIngredientFunc,
}) => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const ingredients = useTypedSelector((state) => state.ingredients);
  const correctTypeIngredient =
    ingredientId === "fruits" ? ingredients.fruits : ingredients.vegetables;

  return (
    <div className="constructor__ingredient-field">
      <select
        name={ingredientId}
        id={ingredientId}
        onChange={({ target: { value } }) =>
          changeIngredientFunc({ fieldId, ingredientId: value }, ingredientId)
        }
        className="constructor__ingredient-select"
      >
        <option value="empty" className="constructor__ingredient-select">
          Choose fruits ingredients
        </option>
        {correctTypeIngredient.map(({ name, id, inStock, literPrice }) => (
          <option
            value={id}
            disabled={inStock ? false : true}
            key={id}
            className="constructor__ingredient-select"
          >
            {inStock
              ? `${name} - ${literPrice}$ per liter`
              : `[${name}] Out of Stock`}
          </option>
        ))}
      </select>
      <button onClick={() => removeFunc(fieldId, ingredientId)}>Delete</button>
    </div>
  );
};
