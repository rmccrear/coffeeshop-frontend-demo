import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from '@/components/Loading';

import ProductCard from '@/components/ProductCard';
import productData from '@/mocks/products.json';
import { 
    loadCartFromLocalStorage,
    saveCartToLocalStorage } from '@/utils';


export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [cartContents, setCartContents] = useState([]);

  useEffect(() => {

    // Load cart from local storage
    const cartData = loadCartFromLocalStorage(); // get data from outside the component
    setCartContents(cartData); // set data inside the component

    setProducts(productData);
  }, []);

  function addProductToCart(product) {
    // just like...
    // cartContents.push(product);
    const newCartContents = [ ...cartContents, product ];
    setCartContents(newCartContents);

    saveCartToLocalStorage(newCartContents);
  }
  const productsJSX = products.map((product) => {
    // Use key prop every time you use map.
    // This is a unique identifier for each product.
    // React is not smart enough to keep track of the order of items in a list.
    // so we need to give it help by providing a unique key prop.
    function addToCart() {
      alert("clicked add to cart " + product.name);
      addProductToCart( product );
    }
    return (<ProductCard
      key={product._id}
      product={product}
      addToCart={addToCart}
    />)
  });
  return (
    <div>
      <Navbar />
      <div className="grid grid-rows-3 grid-flow-col">
        <Loading isLoading={false} />
        {
          productsJSX
        }
      </div>
      <Footer />
    </div>
  );
}