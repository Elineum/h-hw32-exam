import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../globalTypes/storeTypes";
import {
  addIngredient,
  removeIngredient,
} from "../../store/reducers/currentSetupReducer";
import "./IngredientItem.scss";

type IngredientProps = {
  name: string;
  id: string;
  image: string;
  pricePer10g: number;
  smoothieIngredients: object[];
  ingredientsMaxAmount: number;
};

export const IngredientItem: React.FC<IngredientProps> = ({
  name,
  id: ingredientId,
  image,
  pricePer10g,
  smoothieIngredients,
  ingredientsMaxAmount,
}) => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const currentIngredients = useTypedSelector(
    (state) => state.currentSetup.ingredients
  );
  const [isActive, setIsActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<number>(10);
  const [price, setPrice] = useState<number>(pricePer10g);
  const dispatch = useDispatch();

  useEffect(() => {
    const isIngredientExist = smoothieIngredients.find(
      ({ id }: any) => id === ingredientId
    );

    if (isIngredientExist) {
      setIsActive(true);
    }
  }, []);

  useEffect(() => {
    const currentPrice = ((pricePer10g * inputValue) / 10).toFixed(2);
    const priceToNumber = Number(currentPrice);

    setPrice(priceToNumber);
  }, [inputValue]);

  useEffect(() => {
    const enabledIngredient = currentIngredients.filter(
      ({ id }) => id === ingredientId
    );

    if (enabledIngredient.length > 0) {
      const getValueByPercent =
        Math.floor(
          ((enabledIngredient[0].amountPercent / 100) * ingredientsMaxAmount) /
            10
        ) * 10;

      setInputValue(getValueByPercent);
    }
  }, [ingredientsMaxAmount]);

  const clickHandler = ({ target }: React.MouseEvent<HTMLLIElement>) => {
    if (target instanceof HTMLInputElement) {
      return;
    }

    isActive
      ? dispatch(removeIngredient(ingredientId))
      : dispatch(
          addIngredient({
            id: ingredientId,
            amountPercentage: 10,
          })
        );

    setIsActive(!isActive);
  };

  const changeHandler = ({ target: { value } }: any) => {
    setInputValue(value);
  };

  return (
    <li
      className={`ingredient-item ${isActive ? "active" : ""}`}
      onClick={clickHandler}
    >
      <div>
        <img src={image} alt={ingredientId} />
      </div>
      <h4>{name}</h4>
      <span>
        {inputValue}g: {price}$
      </span>
      <span>{}</span>
      <input
        type="range"
        step={10}
        min={10}
        max={ingredientsMaxAmount}
        value={inputValue}
        onChange={changeHandler}
        disabled={isActive ? false : true}
        className="ingredient-item__input"
      />
    </li>
  );
};
