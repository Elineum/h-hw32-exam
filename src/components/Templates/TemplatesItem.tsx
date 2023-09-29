import React from "react";
import { TemplateItem as TemplateItemType } from "../../globalTypes/storeTypes";

type TemplateItemProps = {
  smoothie: TemplateItemType;
};

export const TemplateItem: React.FC<TemplateItemProps> = ({ smoothie }) => {
  return (
    <li className="templates__item">
      <div className="templates__item-image">
        <img src={smoothie.name} alt={smoothie.id} />
      </div>
      <h3 className="templates__item-title">{smoothie.name}</h3>
      <span className="templates__item-span">price</span>
    </li>
  );
};
