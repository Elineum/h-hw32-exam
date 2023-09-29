import { PageIntro } from "../PageIntro/PageIntro";
import { RoutePath } from "../RoutePath/RoutePath";
import "./AboutUs.scss";

export const AboutUs: React.FC = () => {
  return (
    <div>
      <PageIntro title="about us" text="Some lorems" />
      <RoutePath />
      <div>1</div>
    </div>
  );
};
