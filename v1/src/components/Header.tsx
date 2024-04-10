import React, { useState, useEffect } from "react";

interface Prop {
  setHamburgerIsActive: React.Dispatch<React.SetStateAction<Boolean>>;
}

const Menu: React.FC<Prop> = ({ setHamburgerIsActive }) => {
  const disableHamburger = () => {
    setHamburgerIsActive(false);
  };
  return (
    <nav>
      <div className="hamburger-shadow" onClick={disableHamburger}></div>
      <ul>
        <li>
          <a href="#main-top" onClick={disableHamburger}>
            HOME
          </a>
        </li>
        <li>
          <a href="#about-me" onClick={disableHamburger}>
            ABOUT ME
          </a>
        </li>
        <li>
          <a href="#my-works" onClick={disableHamburger}>
            MY WORKS
          </a>
        </li>
        <li>
          <a href="#contact" onClick={disableHamburger}>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Header: React.FC = () => {
  const [hamburgerIsActive, setHamburgerIsActive] = useState<Boolean>(null!);
  // button function
  const hamburgerHandler = () => {
    setHamburgerIsActive(!hamburgerIsActive);
  };
  // get display size
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  };

  // window size
  const { height, width } = useWindowDimensions();
  // set hamburgerIsActive to false when display is larger than 768px
  useEffect(() => {
    const setFalse = () => {
      if (width >= 768) {
        setHamburgerIsActive(false);
      }
    };
    window.addEventListener("resize", setFalse);
    return () => {
      window.removeEventListener("resize", setFalse);
    };
  }, [setHamburgerIsActive]);
  // not allow scroll when hamburger menu is active
  useEffect(() => {
    const body = document.querySelector("body")!;
    if (hamburgerIsActive) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }, [hamburgerIsActive]);
  // render
  return (
    <header>
      {/* hamburger */}
      {width < 768 && (
        <div className="hamburger">
          <button
            className={
              "hamburger-icon" +
              " " +
              (hamburgerIsActive === null
                ? ""
                : hamburgerIsActive
                ? "hamburger-is-active"
                : "hamburger-is-not-active")
            }
            onClick={hamburgerHandler}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
          {hamburgerIsActive && (
            <Menu setHamburgerIsActive={setHamburgerIsActive} />
          )}
        </div>
      )}
      {/* regular menu */}
      {width >= 768 && (
        <div className="header-menu">
          <Menu setHamburgerIsActive={setHamburgerIsActive} />
        </div>
      )}
    </header>
  );
};

export default Header;
