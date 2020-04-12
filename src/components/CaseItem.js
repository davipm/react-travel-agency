import React from "react";

const CaseItem = ({ title, img, subtitle }) => (
  <div className="case">
    <div className="case-details">
      <span>{subtitle}</span>
      <h2>{title}</h2>
    </div>
    <div className="case-image">
      <img src={require(`../assets/${img}.jpg`)} alt={title} />
    </div>
  </div>
);

export default CaseItem;
