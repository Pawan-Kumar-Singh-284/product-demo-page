import React from "react";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import cart from "../assets/images/icon-cart.svg";

function ProductDetail({ addto, deleteto, count, addtocart }) {
  return (
    <div className="about">
      <p className="companyName">SNEAKERS COMPANY</p>
      <h1 id="compTitle">
        Fall Limited Edition <br />
        Sneakers
      </h1>
      <p className="desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <p className="pricing">
        <span className="amount">$125.00</span>{" "}
        <span className="discount">50%</span>
        <span className="red-a">
          <br />
          $250.00
        </span>
      </p>

      <div className="selection">
        <div className="btns">
          <button className="btn" onClick={deleteto}>
            <img src={minus} alt="" />
          </button>
          <p id="val">{count}</p>
          <button className="btn" onClick={addto}>
            <img src={plus} alt="" />
          </button>
        </div>
        <button className="cartButton" onClick={addtocart}>
          <img src={cart} alt="cart" className="buy" />
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
