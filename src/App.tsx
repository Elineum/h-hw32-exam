import { useEffect, useState, useContext } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Basket } from "./components/Basket/Basket";

export const App = () => {
  const [currScrollY, setCurrScrollY] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    const scrolledPixels = window.scrollY;

    setCurrScrollY(scrolledPixels);
  };

  return (
    <>
      <Header userScrollY={currScrollY} />
      <main>
        <Outlet />
      </main>
      <ScrollToTop userScrollY={currScrollY} />
      <Footer />
    </>
  );
};
