import "./ScrollToTop.scss";

type ScrollToTopProps = {
  userScrollY: number;
};

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ userScrollY }) => {
  return (
    <div
      className={`scroll-to-top ${userScrollY > 200 ? "to-top-active" : ""}`}
    ></div>
  );
};
