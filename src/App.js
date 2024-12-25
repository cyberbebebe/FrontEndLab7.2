import React from "react";
import GoodsCard from "./GoodsCard";
import bananaImage from "./images/banana.png";
import pearImage from "./images/pear.png";
import appleImage from "./images/apple.png";
import wineImage from "./images/wine.png";
import peachImage from "./images/peach.png";
import cherryImage from "./images/cherry.png";

import "./App.css";

const goodsData = [
  { image: bananaImage, name: "Banana", price: "15gm" },
  {
    image: pearImage,
    name: "Pear",
    price: "20gm",
  },
  { image: appleImage, name: "Apple", price: "25gm" },
  { image: wineImage, name: "Wine", price: "18gm" },
  { image: peachImage, name: "Peach", price: "25gm" },
  { image: cherryImage, name: "Cherry", price: "18gm" },
];

function App() {
  return (
    <div className="app">
      <h1>Goods Gallery</h1>
      <div className="goods-gallery">
        {goodsData.map((goods, index) => (
          <GoodsCard
            key={index}
            image={goods.image}
            name={goods.name}
            price={goods.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
