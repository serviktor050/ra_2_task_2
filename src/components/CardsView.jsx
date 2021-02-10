import React from "react";
import ShopCard from "./ShopCard.jsx";

export default function CardsView(props) {
  const { cards } = props;

  return (
    <div className="cards-view">
      {cards.map((card) => (
        <ShopCard item={card} />
      ))}
    </div>
  );
}
