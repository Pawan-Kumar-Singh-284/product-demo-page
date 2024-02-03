import React, { useRef, useState } from "react";
import product1img1 from "../assets/images/image-product-1.jpg";
import product1img2 from "../assets/images/image-product-2.jpg";
import product1img3 from "../assets/images/image-product-3.jpg";
import product1img4 from "../assets/images/image-product-4.jpg";
import product1thumb from "../assets/images/image-product-1-thumbnail.jpg";
import product2thumb from "../assets/images/image-product-2-thumbnail.jpg";
import product3thumb from "../assets/images/image-product-3-thumbnail.jpg";
import product4thumb from "../assets/images/image-product-4-thumbnail.jpg";
import next from "../assets/images/icon-next.svg";
import prev from "../assets/images/icon-previous.svg";

let images = [product1img2, product1img3, product1img4];
function Product({ handleOpen }) {
  const imagesrc = useRef();
  let [nexts, setNext] = useState(0);

  const handleNext = () => {
    if (nexts < images.length) {
      imagesrc.current.src = images[nexts];
      setNext(() => nexts++);
    }
  };
  console.log(nexts);
  const handlePrev = () => {
    if (nexts > 0) {
      setNext(() => nexts--);
      imagesrc.current.src = images[images.length - nexts];
    }
    console.log(images[nexts]);
  };
  return (
    <div id="imagesBlock">
      <img
        src={product1img1}
        className="image1"
        ref={imagesrc}
        onClick={handleOpen}
      />
      <button class="nbtn prev" onClick={handlePrev}>
        <img src={prev} alt="" />
      </button>
      <button class="nbtn next" onClick={handleNext}>
        <img src={next} alt="" />
      </button>
      <div className="thumbsnail">
        <img
          src={product1thumb}
          alt="image1"
          onClick={() => (imagesrc.current.src = product1img1)}
        />
        <img
          src={product2thumb}
          alt="image2"
          onClick={() => {
            imagesrc.current.src = product1img2;
          }}
        />
        <img
          src={product3thumb}
          alt="image33"
          onClick={() => {
            imagesrc.current.src = product1img3;
          }}
        />
        <img
          src={product4thumb}
          alt="image4"
          onClick={() => {
            imagesrc.current.src = product1img4;
          }}
        />
      </div>
    </div>
  );
}

export default Product;
