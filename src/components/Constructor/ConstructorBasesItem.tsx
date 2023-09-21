import React, { useEffect, useState } from "react";
import { CurrentBaseItem } from "../../globalTypes/storeTypes";
import { useDispatch } from "react-redux";
import { addBase, removeBase } from "../../store/reducers/currentSetupReducer";

type ConstructorBasesItemProps = {
  name: string;
  id: string;
  currentBases: CurrentBaseItem[];
};

export const ConstructorBasesItem: React.FC<ConstructorBasesItemProps> = ({
  name,
  id: baseid,
  currentBases,
}) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const isBaseExist = currentBases.find(({ id }) => id === baseid);

    if (isBaseExist) {
      setIsActive(true);
    }
  }, []);

  const clickHandler = () => {
    isActive
      ? dispatch(removeBase(baseid))
      : dispatch(
          addBase({
            id: baseid,
            basePercentage: 10,
          })
        );

    setIsActive(!isActive);
  };

  return (
    <li className="constructor__bases-item" onClick={clickHandler}>
      <label htmlFor={baseid}>{name}</label>
      <input type="range" id={baseid} disabled={isActive ? false : true} />
    </li>
  );
};
