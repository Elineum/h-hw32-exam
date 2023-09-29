import { Fragment, useEffect, useState } from "react";
import { PageIntro } from "../PageIntro/PageIntro";
import { RoutePath } from "../RoutePath/RoutePath";
import { v4 as getUniqId } from "uuid";
import { ConstructorIngredientBlock } from "./ConstructorIngredientBlock";
import "./Constructor.scss";
import { PortionItem, ReduxStore } from "../../globalTypes/storeTypes";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  addCurrIngredients,
  recalculateAmount,
  removeCurrIngredients,
  resetCurrIngredient,
  updateCurrIngredients,
} from "../../store/reducers/templateIngredientsReducer";

export type ChangeIngredientFunc = {
  fieldId: string;
  ingredientId: string;
};

export const Constructor = () => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const ingredients = useTypedSelector((state) => state.ingredients);
  const portions = useTypedSelector((state) => state.portions);
  const templateIngredients = useTypedSelector(
    (state) => state.templateIngredients
  );
  const dispatch = useDispatch();
  const [vegetablesIngredientsList, setVegetablesIngredientsList] = useState<
    string[]
  >([]);
  const [fruitsIngredientsList, setFruitsIngredientsList] = useState<string[]>(
    []
  );
  const [currentPortion, setCurrentPortion] = useState<PortionItem>(
    portions[0]
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [ingredientFieldsCount, setIngredientFieldCount] = useState<number>(0);

  // useEffect(() => {
  //   setTotalPrice(
  //     currentIngredients.reduce(
  //       (accum, ingredient) =>
  //         accum + (currentPortion.size / 100) * ingredient.literPrice,
  //       0
  //     )
  //   );
  // }, [currentIngredients]);

  useEffect(() => {
    return () => {
      dispatch(resetCurrIngredient());
    };
  }, []);

  const addIngredientField = (ingredientType: string) => {
    if (ingredientFieldsCount >= 5) return;

    if (ingredientType === "fruits") {
      const tempState = [...fruitsIngredientsList];
      const newIngredientid = getUniqId();
      tempState.push(newIngredientid);
      setIngredientFieldCount(ingredientFieldsCount + 1);
      setFruitsIngredientsList(tempState);
    } else {
      const tempState = [...vegetablesIngredientsList];
      const newIngredientid = getUniqId();
      tempState.push(newIngredientid);
      setIngredientFieldCount(ingredientFieldsCount + 1);
      setVegetablesIngredientsList(tempState);
    }
  };

  const removeIngredientField = (fieldId: string, ingredientType: string) => {
    if (ingredientType === "fruits") {
      const tempState = [...fruitsIngredientsList];
      const filteredState = tempState.filter((id) => id !== fieldId);
      setIngredientFieldCount(ingredientFieldsCount - 1);
      setFruitsIngredientsList(filteredState);
      dispatch(removeCurrIngredients(fieldId));
      dispatch(
        recalculateAmount({
          size: currentPortion.size,
          length: ingredientFieldsCount,
        })
      );
    } else {
      const tempState = [...vegetablesIngredientsList];
      const filteredState = tempState.filter((id) => id !== fieldId);
      setIngredientFieldCount(ingredientFieldsCount - 1);
      setVegetablesIngredientsList(filteredState);
      dispatch(removeCurrIngredients(fieldId));
      dispatch(
        recalculateAmount({
          size: currentPortion.size,
          length: ingredientFieldsCount,
        })
      );
    }
  };

  const changePortion = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const portion = portions.find(({ id }) => id === target.id);

    if (portion) {
      setCurrentPortion(portion);
      dispatch(
        recalculateAmount({
          size: currentPortion.size,
          length: ingredientFieldsCount,
        })
      );
    }
  };

  const changeIngredient = (
    { fieldId, ingredientId }: ChangeIngredientFunc,
    ingredientType: string
  ) => {
    const ingredientFromStore = ingredients[ingredientType].find(
      ({ id }) => id === ingredientId
    );
    const existedIngredientIndex = templateIngredients.findIndex(
      ({ fieldId: stateFieldId }) => stateFieldId === fieldId
    );

    if (ingredientFromStore && existedIngredientIndex >= 0) {
      const currentIngredient = {
        ...ingredientFromStore,
        fieldId,
        amount: 100,
      };
      dispatch(updateCurrIngredients(currentIngredient));
      dispatch(
        recalculateAmount({
          size: currentPortion.size,
          length: ingredientFieldsCount,
        })
      );
      return;
    }

    if (ingredientFromStore) {
      const currentIngredient = {
        ...ingredientFromStore,
        fieldId,
        amount: 100,
      };

      dispatch(addCurrIngredients(currentIngredient));
      dispatch(
        recalculateAmount({
          size: currentPortion.size,
          length: ingredientFieldsCount,
        })
      );
    }
  };

  return (
    <>
      <PageIntro title="constructor" text="lorem some lorem" />
      <RoutePath />
      <section className="constructor">
        <div className="container">
          <div className="constructor__settings">
            <div className="constructor__portions">
              <h2 className="constructor__portions-title">
                Choose your portion
              </h2>
              <div className="constructor__portions-box">
                {portions.map(({ name, id, size }) => (
                  <div className="constructor__portions-item" key={id}>
                    <label htmlFor={id}>
                      {name}, {size < 1000 ? size : size / 1000}{" "}
                      {size < 1000 ? "ml" : "liter"}
                    </label>
                    <input
                      type="radio"
                      name="portion"
                      id={id}
                      value={id}
                      onChange={changePortion}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="constructor__ingredients-box">
              <h2 className="constructor__ingredients-box-title">
                Add ingredients (Max 5)
              </h2>
              <div className="constructor__ingredients-btn-holder">
                <button
                  className="constructor__ingredients-button"
                  onClick={() => addIngredientField("fruits")}
                >
                  Add fruits
                </button>
                <button
                  className="constructor__ingredients-button"
                  onClick={() => addIngredientField("vegetables")}
                >
                  Add vegetables
                </button>
              </div>
              {fruitsIngredientsList.length > 0 && (
                <ConstructorIngredientBlock
                  title="fruits"
                  id="fruits"
                  ingredientList={fruitsIngredientsList}
                  removeFunc={removeIngredientField}
                  changeIngredientFunc={changeIngredient}
                />
              )}
              {vegetablesIngredientsList.length > 0 && (
                <ConstructorIngredientBlock
                  title="vegetables"
                  id="vegetables"
                  ingredientList={vegetablesIngredientsList}
                  removeFunc={removeIngredientField}
                  changeIngredientFunc={changeIngredient}
                />
              )}
            </div>
          </div>
          <div className="constructor__template">
            <div className="constructor__template-img">
              <img src="1" alt="1" />
            </div>
            <div className="constructor__template-detail">
              <h2 className="constructor__template-title">Custom</h2>
              <span className="constructor__template-portion">
                Portion:{" "}
                {currentPortion.size < 1000
                  ? currentPortion.size
                  : currentPortion.size / 1000}
                {currentPortion.size < 1000 ? "ml" : "liter"}
              </span>
              <span className="constructor__template-ingredients">
                Ingredients:
                <span>
                  {templateIngredients.map(({ name, amount }, index) => (
                    <Fragment key={index}>
                      {name} {Math.floor(amount)}
                    </Fragment>
                  ))}
                </span>
              </span>
              <span className="constructor__template-price">
                Total price: {totalPrice}
              </span>
              <button className="constructor__template-purchase">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
