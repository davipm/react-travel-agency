import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import gsap from "gsap";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Home from "./pages/home";
import CaseStudy from "./pages/caseStudy";
import Approach from "./pages/approach";
import Services from "./pages/services";
import About from "./pages/about";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-study", name: "Case Study", Component: CaseStudy },
  { path: "/approach", name: "Approach", Component: Approach },
  { path: "/services", name: "Services", Component: Services },
  { path: "/about-us", name: "About us", Component: About },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = useState(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // prevent flashing
    gsap.to("body", { css: { visibility: "visible" } });

    const debounceHandleSize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debounceHandleSize);

    return () => window.removeEventListener("resize", debounceHandleSize);
  }, []);

  return (
    <Router>
      <Header dimensions={dimensions} />
      <div className="App">
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component dimensions={dimensions} />
            </Route>
          ))}
        </Switch>
      </div>
      <Navigation />
    </Router>
  );
}

export default App;
