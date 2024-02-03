import React from "react";
import deleteImg from "../assets/images/icon-delete.svg";
import shoeimg from "../assets/images/image-product-4-thumbnail.jpg";
import emptyCart from "../assets/images/system-solid-39-trash.gif";

function Cart({ isopen2, tocart, deleteItem }) {
  if (!isopen2) {
    return null;
  }
  return (
    <div id="details">
      {tocart > 0 ? (
        <>
          <div className="cartBox">
            <img src={shoeimg} alt="" className="cartimg" />

            <p className="titleText">Fall limited Edition Sneakers</p>
            <p className="samount">{`$ ${125.0} x ${tocart}= $${
              125 * tocart
            }`}</p>

            <img src={deleteImg} alt="" id="delete" onClick={deleteItem} />
          </div>
          <button className="checkout">Checkout</button>
        </>
      ) : (
        <div className="empty">
          <center>
            <img src={emptyCart} alt="" />
          </center>
        </div>
      )}
    </div>
  );
}

export default Cart;
