import React from "react";

export default function ShopCard(props) {
  const { name, price, color, img } = props.item;

  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <p className="color">{color}</p>
      <div className="card-img">
        <img src={img} alt={name} />
      </div>
      <div className="item-and-cart">
        <div className="price">$ {price}</div>
        <div className="button">Add to cart</div>
      </div>
    </div>
  );
}
