import React, { useState, useEffect } from "react";
// open/closing menu using css
// import "./App-css.scss";
// open/close menu using Javascript/React
import "./App.scss";

const MENU_LEVEL = {
  FIRST: "first",
  SECOND: "second",
};

const App = () => {
  const [firstLevelMenu, setFirstLevelMenu] = useState({
    id: "",
    isOpen: false,
  });

  const [secondLevelMenu, setSecondLevelMenu] = useState({
    id: "",
    isOpen: false,
  });

  const flushState = (level) => {
    switch (level) {
      case MENU_LEVEL.FIRST:
        setFirstLevelMenu({
          id: "",
          isOpen: false,
        });
        break;
      case MENU_LEVEL.SECOND:
        setSecondLevelMenu({
          id: "",
          isOpen: false,
        });
        break;
      default:
        break;
    }
  };

  const openMenu = (e, level) => {
    switch (level) {
      case MENU_LEVEL.FIRST:
        setFirstLevelMenu({
          id: e.target.name,
          isOpen: true,
        });
        break;
      case MENU_LEVEL.SECOND:
        setSecondLevelMenu({
          id: e.target.name,
          isOpen: true,
        });
        break;
      default:
        break;
    }
  };

  const closeMenu = (level) => {
    switch (level) {
      case MENU_LEVEL.FIRST:
        flushState(MENU_LEVEL.FIRST);
        flushState(MENU_LEVEL.SECOND);
        break;
      case MENU_LEVEL.SECOND:
        flushState(MENU_LEVEL.SECOND);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log(firstLevelMenu, secondLevelMenu);
  });

  return (
    <div className="App">
      <ul class="top-level-menu">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li
          name="offices"
          onMouseEnter={(e) => openMenu(e, "first")}
          onMouseLeave={() => closeMenu("first")}
        >
          <a href="#" name="offices">
            Offices
          </a>
          {firstLevelMenu.id === "offices" && firstLevelMenu.isOpen && (
            <ul class="second-level-menu" id="offices">
              <li>
                <a href="#">Chicago</a>
              </li>
              <li
                name="losAngeles"
                onMouseEnter={(e) => openMenu(e, MENU_LEVEL.SECOND)}
                onMouseLeavel={() => closeMenu(MENU_LEVEL.SECOND)}
              >
                <a href="#" name="losAngeles">
                  Los Angeles
                </a>
                {secondLevelMenu.id === "losAngeles" && secondLevelMenu.isOpen && (
                  <ul class="third-level-menu">
                    <li>
                      <a href="#">!!!Information</a>
                    </li>
                    <li>
                      <a href="#">!!!Book a Meeting</a>
                    </li>
                    <li>
                      <a href="#">!!!Testimonials</a>
                    </li>
                    <li>
                      <a href="#">!!!Jobs</a>
                    </li>
                  </ul>
                )}
              </li>
              <li
                name="newYork"
                onMouseEnter={(e) => openMenu(e, MENU_LEVEL.SECOND)}
                onMouseLeavel={() => closeMenu(MENU_LEVEL.SECOND)}
              >
                <a href="#" name="newYork">
                  New York
                </a>
                {secondLevelMenu.id === "newYork" && secondLevelMenu.isOpen && (
                  <ul class="third-level-menu">
                    <li>
                      <a href="#">Information</a>
                    </li>
                    <li>
                      <a href="#">Book a Meeting</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#">Seattle</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default App;
