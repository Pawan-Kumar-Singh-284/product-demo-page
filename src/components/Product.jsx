import React, { useRef, useState } from "react";
import product1img1 from "../assets/images/image-product-1.jpg";
import product1img2 from "../assets/images/image-product-2.jpg";
import product1img3 from "../assets/images/image-product-3.jpg";
import product1img4 from "../assets/images/image-product-4.jpg";
import product1thumb from "../assets/images/image-product-1-thumbnail.jpg";
import product2thumb from "../assets/images/image-product-2-thumbnail.jpg";
import product3thumb from "../assets/images/image-product-3-thumbnail.jpg";
import product4thumb from "../assets/images/image-product-4-thumbnail.jpg";

function Product({ handleOpen }) {
  const imagesrc = useRef();

  return (
    <div id="imagesBlock">
      <img
        src={product1img1}
        className="image1"
        ref={imagesrc}
        onClick={handleOpen}
      />
      <div className="thumbsnail">
        <img
          src={product1thumb}
          alt="p1"
          className="ip1"
          onClick={() => (imagesrc.current.src = product1img1)}
        />
        <img
          src={product2thumb}
          alt="p2"
          className="ip2"
          onClick={() => {
            imagesrc.current.src = product1img2;
          }}
        />
        <img
          src={product3thumb}
          alt="p3"
          className="ip3"
          onClick={() => {
            imagesrc.current.src = product1img3;
          }}
        />
        <img
          src={product4thumb}
          alt="p4"
          className="ip4"
          onClick={() => {
            imagesrc.current.src = product1img4;
          }}
        />
      </div>
    </div>
  );
}

export default Product;
