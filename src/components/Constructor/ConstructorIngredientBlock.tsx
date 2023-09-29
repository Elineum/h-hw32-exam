import React from "react";
import { ConstructorIngredient } from "./ConstructorIngredient";
import { ChangeIngredientFunc } from "./Constructor";

type ConstructorIngredientBlockProps = {
  title: string;
  id: string;
  ingredientList: string[];
  removeFunc: RemoveFunction;
  changeIngredientFunc: (
    { fieldId, ingredientId }: ChangeIngredientFunc,
    ingredientType: string
  ) => void;
};

export type RemoveFunction = (
  elementId: string,
  ingredientType: string
) => void;

export const ConstructorIngredientBlock: React.FC<
  ConstructorIngredientBlockProps
> = ({ title, ingredientList, id, removeFunc, changeIngredientFunc }) => {
  return (
    <div className="constructor__ingredient-box">
      <h3 className="constructor__ingredient-box-title">{title}:</h3>
      {ingredientList.map((fieldId) => (
        <ConstructorIngredient
          id={id}
          fieldId={fieldId}
          key={fieldId}
          removeFunc={removeFunc}
          changeIngredientFunc={changeIngredientFunc}
        />
      ))}
    </div>
  );
};
