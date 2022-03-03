import React from "react";
import starLogo from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`images/${props.coverImg}`}
        className="card--image"
        alt="katie"
      />
      <div className="card--stats">
        <img src={starLogo} alt="star logo" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>From ${props.price} / person</p>
    </div>
  );
}
