import React from "react";
import { TemplateItem as TemplateItemType } from "../../globalTypes/storeTypes";
import { useDispatch } from "react-redux";
import { setCurrentSetup } from "../../store/reducers/currentSetupReducer";
import { setModal } from "../../store/reducers/modalReducer";

type TemplateItemProps = {
  smoothie: TemplateItemType;
};

export const TemplateItem: React.FC<TemplateItemProps> = ({ smoothie }) => {
  const dispatch = useDispatch();

  const openTemplate = () => {
    dispatch(setCurrentSetup(smoothie));
    dispatch(setModal("constructor"));
  };

  return (
    <li className="templates__item" onClick={openTemplate}>
      <div className="templates__item-image">
        <img src={smoothie.image} alt={smoothie.id} />
      </div>
      <h3 className="templates__item-title">{smoothie.name}</h3>
      <span className="templates__item-span">price</span>
    </li>
  );
};
