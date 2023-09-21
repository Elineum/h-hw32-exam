import { TypedUseSelectorHook, useSelector } from "react-redux";
import { PortionItem, ReduxStore } from "../../globalTypes/storeTypes";
import { ConstructorBasesItem } from "./ConstructorBasesItem";
import { v4 as getUniqId } from "uuid";

type ConstructorBasesProps = {
  choosedPortion: PortionItem;
};

export const ConstructorBases: React.FC<ConstructorBasesProps> = ({
  choosedPortion,
}) => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const currentSetup = useTypedSelector((state) => state.currentSetup);
  const bases = useTypedSelector((state) => state.base);
  // const calcPortionValue = () => {
  //   console.log(
  //     Math.floor(
  //       (currentSetup.baseRatioPercent / 100) * choosedPortion.size
  //     )
  //   );
  // };

  return (
    <div className="constructor__bases">
      <ul className="constructor__bases-list">
        {bases.map((base) => (
          <ConstructorBasesItem
            {...base}
            currentBases={currentSetup.base}
            key={getUniqId()}
          />
        ))}
      </ul>
    </div>
  );
};
