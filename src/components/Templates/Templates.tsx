import React from "react";
import "./Templates.scss";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../globalTypes/storeTypes";
import { TemplateItem } from "./TemplatesItem";
import { v4 as getUniqId } from "uuid";

export const Templates = () => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const templates = useTypedSelector((state) => state.templates);

  return (
    <section className="templates">
      <div className="container">
        <h2 className="templates__title">New Flavors</h2>
        <ul className="templates__list">
          {templates.map((smoothie) => (
            <TemplateItem key={getUniqId()} smoothie={smoothie} />
          ))}
        </ul>
      </div>
    </section>
  );
};
