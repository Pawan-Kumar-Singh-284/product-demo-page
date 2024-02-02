import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import PopBox from "./components/PopBox";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

function App() {
  const body = document.body;

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  let [count, setCount] = useState(0);
  let [tocart, setTocart] = useState(0);

  const handleIncrement = () => {
    setCount(() => count++);
  };
  const handleDecrement = () => {
    if (count > 0) setCount(() => count--);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen2 = () => {
    setOpen2(!open2);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    body.addEventListener("click", () => setOpen2(false));
    console.log(body);
  };

  const handleCartItem = () => {
    setTocart(count);
    setCount(0);
  };

  const deleteItem = () => {
    setTocart(0);
  };

  return (
    <>
      <Header cart={tocart} handleOpen2={handleOpen2} />
      <section>
        <Product handleOpen={handleOpen} />
        <ProductDetail
          addto={handleIncrement}
          deleteto={handleDecrement}
          count={count}
          addtocart={handleCartItem}
        />
      </section>

      <PopBox isopen={open} close={handleClose}>
        <Product />
      </PopBox>
      <Cart
        isopen2={open2}
        handleClose2={handleClose2}
        tocart={tocart}
        deleteItem={deleteItem}
      />
    </>
  );
}

export default App;
