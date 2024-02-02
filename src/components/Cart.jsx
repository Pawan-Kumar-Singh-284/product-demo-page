import React from "react";
import deleteImg from "../assets/images/icon-delete.svg";
import shoeimg from "../assets/images/image-product-4-thumbnail.jpg";
import close from "../assets/images/icon-close.svg"

function Cart({ isopen2, tocart,deleteItem }) {
  if (!isopen2) {
    return null;
    
  }
  return (
    <div id="details">
      <div className="f-cart">
        <p>Cart</p>
      </div>

      {tocart > 0 ? (
        <>
          <div className="cartBox">
            <img src={shoeimg} alt="" className="cartimg" />

            <p className="titleText">Fall limited Edition Sneakers</p>
            <p className="samount">{`$ ${125.00} x ${tocart}= $${(125*tocart)}`}</p>
            

            <img src={deleteImg} alt="" id="delete" onClick={deleteItem}/>
          </div>
          <button className="checkout">Checkout</button>
        </>
      ) : (
        <div className="ccart">your cart is empty</div>
      )}
    </div>
  );
}

export default Cart;
