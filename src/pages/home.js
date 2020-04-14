import React, { useEffect, useState } from "react";
import gsap from "gsap";

import IntroOverlay from "../components/IntroOverlay";
import Banner from "../components/Banner";
import Cases from "../components/Cases";

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from(".line span", 1, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", 0, { css: { display: "none" } })
    .from(".case-image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

function Home({ dimensions }) {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [dimensions.width]);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  return (
    <>
      {!animationComplete && <IntroOverlay />}
      <Banner />
      <Cases />
    </>
  );
}

export default Home;
