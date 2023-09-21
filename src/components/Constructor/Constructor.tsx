import { useState, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IngredientItem } from "../IngredientItem/IngredientItem";
import { ConstructorBases } from "./ConstructorBases";
import { ConstructorPortions } from "./ConstructorPortions";
import { PortionItem, ReduxStore } from "../../globalTypes/storeTypes";
import { setModal } from "../../store/reducers/modalReducer";
import "./Constructor.scss";

export const Constructor: React.FC = () => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const currentSetup = useTypedSelector((state) => state.currentSetup);
  const ingredients = useTypedSelector((state) => state.ingredients);
  const portions = useTypedSelector((state) => state.portions);
  const [portionBaseCoef, setPortionBaseCoef] = useState<number>(150);
  const [choosedPortion, setChoosedPortion] = useState<PortionItem>(
    portions[0]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const portionSize = choosedPortion.size;
    const baseCoef = currentSetup.baseRatio;
    const exactBaseValue = (baseCoef / 100) * portionSize;

    setPortionBaseCoef(exactBaseValue);
  }, [choosedPortion]);

  const calcIngredientAmount: () => number = () => {
    return Math.floor((choosedPortion.size - portionBaseCoef) / 10) * 10;
  };

  const closeModal = (e: any) => {
    if (e.target === e.currentTarget) {
      dispatch(setModal("none"));
    }
  };

  return (
    <div className="constructor" onClick={closeModal}>
      <div className="constructor__window">
        <div className="constructor__image">
          <img src="" alt={currentSetup.id} />
        </div>
        <div className="constructor__content-box">
          <div className="constructor__settings">
            <div>
              <h3>{currentSetup.name || "Custom"}</h3>
              <span>{`${choosedPortion.name} portion (${choosedPortion.size}ml)`}</span>
              <ConstructorBases choosedPortion={choosedPortion} />
              <div className="constructor__portions">
                {portions.map((portionsItem, index) => (
                  <ConstructorPortions
                    key={index}
                    {...portionsItem}
                    index={index}
                    setChoosedPortion={setChoosedPortion}
                    choosedPortion={choosedPortion}
                    portions={portions}
                  />
                ))}
              </div>
            </div>
            <ul className="constructor__list">
              {ingredients.map((ingredient: any) => (
                <IngredientItem
                  {...ingredient}
                  smoothieIngredients={currentSetup.ingredients}
                  ingredientsMaxAmount={calcIngredientAmount()}
                  key={ingredient.id}
                />
              ))}
            </ul>
          </div>
          <div className="constructor__total-price">
            <button>Price</button>
          </div>
        </div>
      </div>
    </div>
  );
};
