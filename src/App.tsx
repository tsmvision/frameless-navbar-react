import React, { useState, useEffect } from "react";
// open/closing menu using css
// import "./App-css.scss";
// open/close menu using Javascript/React
import "./App.scss";
import { MenuState, GetMenuState, GetCloseMenuState } from "./types/App.type";

const MENU_LEVEL = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third",
};

const getOpenMenuState: GetMenuState = ({
  firstId,
  firstIsOpen,
  secondId,
  secondIsOpen,
  name,
  level,
}) => {
  switch (level) {
    case MENU_LEVEL.FIRST:
      return {
        firstId: name,
        firstIsOpen: true,
        secondId: "",
        secondIsOpen: false,
        thirdId: "",
        thirdIsOpen: false,
      };
    case MENU_LEVEL.SECOND:
      return {
        firstId,
        firstIsOpen,
        secondId: name || "",
        secondIsOpen: true,
        thirdId: "",
        thirdIsOpen: false,
      };
    case MENU_LEVEL.THIRD:
      return {
        firstId,
        firstIsOpen,
        secondId,
        secondIsOpen,
        thirdId: name || "",
        thirdIsOpen: true,
      };
    default:
      return {
        firstId: "",
        firstIsOpen: false,
        secondId: "",
        secondIsOpen: false,
        thirdId: "",
        thirdIsOpen: false,
      };
  }
};

const getCloseMenuState: GetCloseMenuState = ({
  firstId,
  firstIsOpen,
  secondId,
  secondIsOpen,
  level,
}) => {
  switch (level) {
    case MENU_LEVEL.FIRST:
      return {
        firstId: "",
        firstIsOpen: false,
        secondId: "",
        secondIsOpen: false,
        thirdId: "",
        thirdIsOpen: false,
      };
    case MENU_LEVEL.SECOND:
      return {
        firstId: firstId || "",
        firstIsOpen: firstIsOpen,
        secondId: "",
        secondIsOpen: false,
        thirdId: "",
        thirdIsOpen: false,
      };
    case MENU_LEVEL.THIRD:
      return {
        firstId: firstId || "",
        firstIsOpen: firstIsOpen,
        secondId: secondId,
        secondIsOpen: secondIsOpen,
        thirdId: "",
        thirdIsOpen: false,
      };
    default:
      return {
        firstId: "",
        firstIsOpen: false,
        secondId: "",
        secondIsOpen: false,
        thirdId: "",
        thirdIsOpen: false,
      };
  }
};

const App = () => {
  const [menu, setMenu] = useState<MenuState>({
    firstId: "",
    firstIsOpen: false,
    secondId: "",
    secondIsOpen: false,
    thirdId: "",
    thirdIsOpen: false,
  });

  // const openMenu = (name: string, level: string) => {
  //   console.log(name);
  //   const { firstId, firstIsOpen, secondId, secondIsOpen } = menu;
  //   switch (level) {
  //     case MENU_LEVEL.FIRST:
  //       setMenu({
  //         firstId: name,
  //         firstIsOpen: true,
  //         secondId: "",
  //         secondIsOpen: false,
  //         thirdId: "",
  //         thirdIsOpen: false,
  //       });
  //       break;
  //     case MENU_LEVEL.SECOND:
  //       setMenu({
  //         firstId,
  //         firstIsOpen,
  //         secondId: name || "",
  //         secondIsOpen: true,
  //         thirdId: "",
  //         thirdIsOpen: false,
  //       });
  //       break;
  //     case MENU_LEVEL.THIRD:
  //       setMenu({
  //         firstId,
  //         firstIsOpen,
  //         secondId,
  //         secondIsOpen,
  //         thirdId: name || "",
  //         thirdIsOpen: true,
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const openMenu = (name: string, level: string) => {
    const {
      firstId,
      firstIsOpen,
      secondId,
      secondIsOpen,
      thirdId,
      thirdIsOpen,
    } = menu;
    setMenu(
      getOpenMenuState({
        firstId,
        firstIsOpen,
        secondId,
        secondIsOpen,
        name,
        level,
      })
    );
  };

  const closeMenu = (level: string) => {
    const { firstId, firstIsOpen, secondId, secondIsOpen } = menu;
    setMenu(
      getCloseMenuState({
        firstId,
        firstIsOpen,
        secondId,
        secondIsOpen,
        level,
      })
    );
  };

  // const closeMenu = (level: string) => {
  //   switch (level) {
  //     case MENU_LEVEL.FIRST:
  //       setMenu({
  //         firstId: "",
  //         firstIsOpen: false,
  //         secondId: "",
  //         secondIsOpen: false,
  //         thirdId: "",
  //         thirdIsOpen: false,
  //       });
  //       break;
  //     case MENU_LEVEL.SECOND:
  //       setMenu({
  //         firstId: menu.firstId || "",
  //         firstIsOpen: menu.firstIsOpen,
  //         secondId: "",
  //         secondIsOpen: false,
  //         thirdId: "",
  //         thirdIsOpen: false,
  //       });
  //       break;
  //     case MENU_LEVEL.THIRD:
  //       setMenu({
  //         firstId: menu.firstId || "",
  //         firstIsOpen: menu.firstIsOpen,
  //         secondId: menu.secondId,
  //         secondIsOpen: menu.secondIsOpen,
  //         thirdId: "",
  //         thirdIsOpen: false,
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  // };

  useEffect(() => {
    // console.log(menu: any);
  });

  return (
    <div className="App">
      <ul className="top-level-menu">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li
          onMouseEnter={(e) => openMenu("offices", MENU_LEVEL.FIRST)}
          onMouseLeave={() => closeMenu(MENU_LEVEL.FIRST)}
        >
          <a href="#">Offices</a>
          {menu.firstId === "offices" && menu.firstIsOpen && (
            <ul className="second-level-menu">
              <li>
                <a href="#">Chicago</a>
              </li>
              <li
                id="losAngeles"
                onMouseEnter={(e) => openMenu("losAngeles", MENU_LEVEL.SECOND)}
                onMouseLeave={() => closeMenu(MENU_LEVEL.SECOND)}
              >
                <a href="#" id="losAngeles">
                  Los Angeles
                </a>
                {menu.secondId === "losAngeles" && menu.secondIsOpen && (
                  <ul className="third-level-menu">
                    <li>
                      <a href="#">!!!Information</a>
                    </li>
                    <li
                      id="meeting"
                      onMouseEnter={(e) =>
                        openMenu("meeting", MENU_LEVEL.THIRD)
                      }
                      onMouseLeave={() => closeMenu(MENU_LEVEL.THIRD)}
                    >
                      <a href="#" id="meeting">
                        meeting
                      </a>
                      {menu.thirdId === "meeting" && menu.thirdIsOpen && (
                        <ul className="fourth-level-menu">
                          <li>
                            <a href="#">fourth1</a>
                          </li>
                          <li>
                            <a href="#">fourth2</a>
                          </li>
                          <li>
                            <a href="#">fourth3</a>
                          </li>
                          <li>
                            <a href="#">fourth4</a>
                          </li>
                        </ul>
                      )}
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
                onMouseEnter={(e) => openMenu("newYork", MENU_LEVEL.SECOND)}
                onMouseLeave={() => closeMenu(MENU_LEVEL.SECOND)}
              >
                <a href="#" id="newYork">
                  New York
                </a>
                {menu.secondId === "newYork" && menu.secondIsOpen && (
                  <ul className="third-level-menu">
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
