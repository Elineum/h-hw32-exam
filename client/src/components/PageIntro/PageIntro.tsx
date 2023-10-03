import "./PageIntro.scss";

type PageIntroProps = {
  title: string;
  text: string;
};

export const PageIntro: React.FC<PageIntroProps> = ({ title, text }) => {
  return (
    <div className="page-intro">
      <div className="page-intro__bg-shadow"></div>
      <div className="container">
        <h2 className="page-intro__title">{title}</h2>
        <div className="page-intro__text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
