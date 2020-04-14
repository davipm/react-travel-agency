import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import { openMenu, closeMenu } from "../animations/menuAnimations";

function Header({ history, dimensions }) {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });

    if (menuState.menuOpened) {
      openMenu(dimensions.width);
    } else {
      closeMenu();
    }
  }, [dimensions.width, history, menuState.menuOpened]);

  return (
    <header className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/">Travel Agency</NavLink>
          </div>
          <div className="nav-toggle">
            <div
              className="hamburger-menu"
              onClick={() => setMenuState({ menuOpened: true })}
            >
              <span />
              <span />
            </div>
            <div
              className="hamburger-menu-close"
              onClick={() => setMenuState({ menuOpened: false })}
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default withRouter(Header);
