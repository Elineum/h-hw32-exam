import { useEffect, useState, useContext } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Constructor } from "./components/Constructor/Constructor";
import { Basket } from "./components/Basket/Basket";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "./globalTypes/storeTypes";

export const App = () => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const activeModal = useTypedSelector((store) => store.activeModal);
  const dispatch = useDispatch();
  const [currScrollY, setCurrScrollY] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = () => {
    const scrolledPixels = window.scrollY;

    setCurrScrollY(scrolledPixels);
  };

  useEffect(() => {
    if (activeModal === "none") {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
      return;
    }

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "17px";
  }, [activeModal]);

  return (
    <>
      <Header userScrollY={currScrollY} />
      <main>
        <Outlet />
      </main>
      {activeModal === "constructor" ? (
        <Constructor />
      ) : (
        activeModal === "basket" && <Basket />
      )}
      <ScrollToTop userScrollY={currScrollY} />
      <Footer />
    </>
  );
};
