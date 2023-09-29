import { useState } from "react";
import "./Gallery.scss";

const tabsData = [
  { title: "All", filter: "" },
  { title: "Fruits", filter: "fruits" },
  { title: "Vegetables", filter: "vegetables" },
];

const tabContent = [
  {
    text: 1,
    filter: "fruits",
  },
  {
    text: 2,
    filter: "fruits",
  },
  {
    text: 3,
    filter: "fruits",
  },
  {
    text: 4,
    filter: "vegetables",
  },
  {
    text: 5,
    filter: "vegetables",
  },
  {
    text: 6,
    filter: "vegetables",
  },
];

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [tabCurrContent, setTabCurrContent] =
    useState<{ text: number; filter: string }[]>(tabContent);

  const handleTabClick = (index: number) => {
    setActiveTab(index);

    if (index === 0) return setTabCurrContent(tabContent);

    const filterValue = tabsData[index].filter;
    const filteredList = tabContent.filter(
      ({ filter }) => filter === filterValue
    );

    setTabCurrContent(filteredList);
  };

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="gallery__title">Our Gallery</h2>
        <ul className="gallery__tabs-list">
          {tabsData.map(({ title }, index) => (
            <li
              className={`gallery__tabs-item ${
                activeTab === index ? "active" : ""
              }`}
              key={index}
              onClick={() => handleTabClick(index)}
            >
              {title}
            </li>
          ))}
        </ul>
        <div className="gallery__photos-box">
          {tabCurrContent.map(({ text }, index) => (
            <div className="gallery__box" key={index}>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
