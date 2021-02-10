import React from "react";
import ShopItem from "./ShopItem.jsx";

export default function ListView(props) {
  const { items } = props;

  return (
    <div className="list-view">
      {items.map((item) => (
        <ShopItem item={item} />
      ))}
    </div>
  );
}
