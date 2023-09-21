import React from "react";
import { PortionItem } from "../../globalTypes/storeTypes";

type ConstructorPortionsProps = {
  index: number;
  name: string;
  id: string;
  portions: PortionItem[];
  choosedPortion: PortionItem;
  setChoosedPortion: React.Dispatch<React.SetStateAction<PortionItem>>;
};

export const ConstructorPortions: React.FC<ConstructorPortionsProps> = ({
  index,
  choosedPortion,
  name,
  id,
  portions,
  setChoosedPortion,
}) => {
  const changeHandler = ({
    target: { id: inputId },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const portionChoosed = portions.find(({ id }) => id === inputId);

    if (portionChoosed) {
      setChoosedPortion(portionChoosed);
    }
  };

  return (
    <div className="constructor__portion-item" key={index}>
      <input
        type="radio"
        id={id}
        name="portion"
        className="constructor__portion-input"
        onChange={changeHandler}
      />
      <label
        htmlFor={id}
        className={`constructor__portion-label ${
          choosedPortion.id === id ? "active" : ""
        }`}
      >
        {name}
      </label>
    </div>
  );
};
