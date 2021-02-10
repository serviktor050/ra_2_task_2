import React from "react";

export default function ShopItem(props) {
  const { name, price, color, img } = props.item;

  return (
    <div className="item">
      <div className="item-img">
        <img src={img} alt={name} />
      </div>
      <h2 className="name">{name}</h2>
      <p className="color">{color}</p>
      <div className="price">$ {price}</div>
      <div className="button">Add to cart</div>
    </div>
  );
}
