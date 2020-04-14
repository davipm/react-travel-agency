import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/case-studie" exact>
                  Cities
                </NavLink>
              </li>
              <li>
                <NavLink to="/approach" exact>
                  Private Tours
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" exact>
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink to="/contact" exact>
                    Get in touch with us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/request" exact>
                    Request a Tour
                  </NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarter</li>
                <li>Fortaleza 9999</li>
                <li>Brazil</li>
                <li>Ceara</li>
                <li>Switzerland</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+55 (85)9 9999-9999</li>
                <li>Fortaleza 9999</li>
                <li>Brazil</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
