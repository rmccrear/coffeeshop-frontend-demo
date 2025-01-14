import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import CartItem from "@/components/CartItem";
// import cart from "@/mocks/cart.json";
import { 
  loadCartFromLocalStorage,
  saveCartToLocalStorage } from '@/utils';


// Instead of add to cart, 
// we will have a remove from cart button

export default function Cart() {
  const [cartContents, setCartContents] = useState([]);
  // const cartContents = cart.products;
  // console.log(cartContents)

  useEffect(() => {
    // TODO: Load Cart from the server...
    const cartData = loadCartFromLocalStorage();
    setCartContents(cartData);
  }, []);

  const cartJSX = cartContents.map((product) => {
    // Use key prop every time you use map.
    // This is a unique identifier for each product.
    // React is not smart enough to keep track of the order of items in a list.
    // so we need to give it help by providing a unique key prop.
    function removeFromCart() {
      alert("clicked remove from cart " + product.name);
    }
    return (<CartItem
              key={product._id}
              product={product}
              removeFromCart={removeFromCart}
            />)
  });
  return (
    <div>
      <h1 className="text-4xl">Cart Contents</h1>
      <div className="flex flex-wrap flex-col">
        {
          cartJSX
        }
      </div>
    </div>
  );
}
