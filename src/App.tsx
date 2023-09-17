import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Constructor } from "./components/Constructor/Constructor";
import { Basket } from "./components/Basket/Basket";

export const App = () => {
  const [currScrollY, setCurrScrollY] = useState<number>(0);
  const [activeModalShow, setActiveModalShow] = useState<string>("constructor");
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = () => {
    const scrolledPixels = window.scrollY;

    setCurrScrollY(scrolledPixels);
  };

  useEffect(() => {
    setIsModalActive(!isModalActive);

    if (activeModalShow === "constructor" || activeModalShow === "basket") {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "auto";
  }, [activeModalShow]);

  return (
    <>
      <Header userScrollY={currScrollY} />
      <main>
        <Outlet />
      </main>
      {activeModalShow === "constructor" ? (
        <Constructor setActiveModal={setActiveModalShow} />
      ) : (
        activeModalShow === "basket" && <Basket />
      )}
      <ScrollToTop userScrollY={currScrollY} />
      <Footer />
    </>
  );
};
