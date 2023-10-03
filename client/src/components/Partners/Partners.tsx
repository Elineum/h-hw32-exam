import "./Partners.scss";

const PARTNERS_LIST = [
  {
    partnerImage: "#",
  },
  {
    partnerImage: "#",
  },
  {
    partnerImage: "#",
  },
  {
    partnerImage: "#",
  },
  {
    partnerImage: "#",
  },
];

export const Partners: React.FC = () => {
  return (
    <section className="partners">
      <div className="container">
        <ul className="partners__list">
          {PARTNERS_LIST.map(({ partnerImage }, index) => (
            <li className="partners__item" key={index}>
              <img src={partnerImage} alt="img-discription" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
