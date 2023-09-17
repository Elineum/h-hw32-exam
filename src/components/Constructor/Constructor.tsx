import "./Constructor.scss";

type ConstructorProps = {
  setActiveModal: React.Dispatch<React.SetStateAction<string>>;
};

export const Constructor: React.FC<ConstructorProps> = ({ setActiveModal }) => {
  const closeModal = (e: any) => {
    if (e.target === e.currentTarget) {
      setActiveModal("none");
    }
  };

  return (
    <div className="constructor" onClick={closeModal}>
      <div className="constructor__window">
        <div className="constructor__image">
          <img src="" alt="" />
        </div>
        <div className="constructor__set">
          <h3>t</h3>
          <span>s</span>
          <p>t</p>
          <div>s</div>
          <div>s</div>
          <ul>
            <li>l</li>
            <li>l</li>
            <li>l</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
