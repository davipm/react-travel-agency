import React from "react";
import { ReactComponent as CaseNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasePrev } from "../assets/arrow-left.svg";
import CaseItem from "./CaseItem";

const caseStudies = [
  {
    id: 1,
    subtitle: "Kyoto 京都",
    title: "One of the oldest cities in japan",
    img: "kyoto",
  },
  {
    id: 2,
    subtitle: "Rio de Janeiro",
    title: "The former capital of Brazil",
    img: "riodejaneiro",
  },
  {
    id: 3,
    subtitle: "London",
    title: "One of the capitals of the world",
    img: "london",
  },
];

function Cases() {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasePrev />
          </div>
          <div className="cases-arrow next">
            <CaseNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((item) => (
            <CaseItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cases;
