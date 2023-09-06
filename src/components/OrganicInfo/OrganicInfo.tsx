import "./OrganicInfo.scss";
import organicImage from "../../assets/images/organicSmoothie.png";
import { OurAdvantages } from "../OurAdvantages/OurAdvantages";
import barnImg from "../../assets/images/advantages-barn.png";
import starImg from "../../assets/images/advantages-star.png";
import fieldsImg from "../../assets/images/advantages-fields.png";
import pshenicaImg from "../../assets/images/advantages-pshenica.png";

export const OrganicInfo: React.FC = () => {
  return (
    <section className="organic-info container">
      <div className="organic-info__advantages">
        <OurAdvantages
          title="100% ORGANIC"
          image={barnImg}
          napravlenie="default"
        >
          We make our products from 100% organic and fresh ingredients full of
          vitamins and nutrients.
        </OurAdvantages>
        <span className="organic-info__line"></span>
        <OurAdvantages
          title="GOOD FOR HEALTH"
          image={starImg}
          napravlenie="default"
        >
          Our drinks are exceptionally good for hoosting your health and
          increasing your energy level.
        </OurAdvantages>
      </div>
      <div className="organic-info__img-wrap">
        <img src={organicImage} alt="organic-image" />
      </div>
      <div className="organic-info__advantages">
        <OurAdvantages
          title="NO ADDITIVES"
          image={fieldsImg}
          napravlenie="reverse"
        >
          Our smoothies, healthy drinks, and energy howls contain no artificial
          additives, only vital elements.
        </OurAdvantages>
        <span className="organic-info__line"></span>
        <OurAdvantages
          title="A LOT OF ENERGY"
          image={pshenicaImg}
          napravlenie="reverse"
        >
          We designed our products as the universal organic energetics that can
          quench your thirst.
        </OurAdvantages>
      </div>
    </section>
  );
};
