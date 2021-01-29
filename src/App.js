import React, { useState, useEffect } from "react";
// open/closing menu using css
// import "./App-css.scss";
// open/close menu using Javascript/React
import "./App.scss";

const MENU_LEVEL = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third",
};

const App = () => {
  const [menu, setMenu] = useState({
    firstId: "",
    firstIsOpen: false,
    secondId: "",
    secondIsOpen: false,
    thirdId: "",
    thirdIsOpen: "",
  });

  const openMenu = (name, level) => {
    console.log(name);
    const { firstId, firstIsOpen, secondId, secondIsOpen } = menu;
    switch (level) {
      case MENU_LEVEL.FIRST:
        setMenu({
          firstId: name,
          firstIsOpen: true,
          secondId: "",
          secondIsOpen: false,
          thirdId: "",
          thirdIsOpen: false,
        });
        break;
      case MENU_LEVEL.SECOND:
        setMenu({
          firstId,
          firstIsOpen,
          secondId: name || "",
          secondIsOpen: true,
          thirdId: "",
          thirdIsOpen: false,
        });
        break;
      case MENU_LEVEL.THIRD:
        setMenu({
          firstId,
          firstIsOpen,
          secondId,
          secondIsOpen,
          thirdId: name || "",
          thirdIsOpen: true,
        });
        break;
      default:
        break;
    }
  };

  const closeMenu = (level) => {
    switch (level) {
      case MENU_LEVEL.FIRST:
        setMenu({
          firstId: "",
          firstIsOpen: false,
          secondId: "",
          secondIsOpen: false,
          thirdId: "",
          thirdIsOpen: "",
        });
        break;
      case MENU_LEVEL.SECOND:
        setMenu({
          firstId: menu.firstId || "",
          firstIsOpen: menu.firstIsOpen,
          secondId: "",
          secondIsOpen: false,
          thirdId: "",
          thirdIsOpen: false,
        });
        break;
      case MENU_LEVEL.SECOND:
        setMenu({
          firstId: menu.firstId || "",
          firstIsOpen: menu.firstIsOpen,
          secondId: menu.secondId,
          secondIsOpen: menu.secondIsOpen,
          thirdId: "",
          thirdIsOpen: false,
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log(menu);
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
          onMouseEnter={(e) => openMenu("offices", MENU_LEVEL.FIRST)}
          onMouseLeave={() => closeMenu(MENU_LEVEL.FIRST)}
        >
          <a href="#">Offices</a>
          {menu.firstId === "offices" && menu.firstIsOpen && (
            <ul class="second-level-menu">
              <li>
                <a href="#">Chicago</a>
              </li>
              <li
                name="losAngeles"
                onMouseEnter={(e) => openMenu("losAngeles", MENU_LEVEL.SECOND)}
                onMouseLeave={() => closeMenu(MENU_LEVEL.SECOND)}
              >
                <a href="#" name="losAngeles">
                  Los Angeles
                </a>
                {menu.secondId === "losAngeles" && menu.secondIsOpen && (
                  <ul class="third-level-menu">
                    <li>
                      <a href="#">!!!Information</a>
                    </li>
                    <li
                      name="meeting"
                      onMouseEnter={(e) =>
                        openMenu("meeting", MENU_LEVEL.THIRD)
                      }
                      onMouseLeave={() => closeMenu(MENU_LEVEL.THIRD)}
                    >
                      <a href="#" name="meeting">
                        meeting
                      </a>
                      {menu.thirdId === "meeting" && menu.thirdIsOpen && (
                        <ul class="fourth-level-menu">
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
                <a href="#" name="newYork">
                  New York
                </a>
                {menu.secondId === "newYork" && menu.secondIsOpen && (
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
