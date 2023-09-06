import { HomeTitle } from "../HomeTitle/HomeTitle";
import { OrganicInfo } from "../OrganicInfo/OrganicInfo";
import "./DefaultMain.scss";

export const DefaultMain: React.FC = () => {
  return (
    <>
      <HomeTitle />
      <OrganicInfo />
    </>
  );
};
