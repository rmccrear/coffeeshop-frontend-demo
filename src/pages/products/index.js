import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from '@/components/Loading';

import ProductCard from '@/components/ProductCard';
import {
  loadCartFromLocalStorage,
  saveCartToLocalStorage
} from '@/utils';
import { useFetch } from '@/hooks/api';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductsPage() {
  const router = useRouter();
  const { category } = router.query;
  console.log(category);

  const [cartContents, setCartContents] = useState([]);


  const url = `${BACKEND_URL}/products`;
  const [productFetchError, productsLoading, products] = useFetch(url, []);

  // We need productFetchError, productsLoading, products

  useEffect(() => {
    // Load cart from local storage
    const cartData = loadCartFromLocalStorage(); // get data from outside the component
    setCartContents(cartData); // set data inside the component

  }, []);

  async function fetchFilteredProducts(category) {
    const url = `${BACKEND_URL}/products?category=${category}`;
    setProductsLoading(true);
    const result = await fetch(url);
    const productData = await result.json();
    setProductsLoading(false);
    setProducts(productData);
  }

  useEffect(() => {
    if (category) {
      console.log(category)
      fetchFilteredProducts(category);
    }
  }, [category]);

  function addProductToCart(product) {
    // just like...
    // cartContents.push(product);
    const newCartContents = [...cartContents, product];
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
      addProductToCart(product);
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
      {
        productFetchError ? (
          <div className="text-red-400 text-lg">
            Error fetching products.
          </div>
        ) : ""
      }
      {
        productsLoading ? (
          <div className="flex justify-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : (
          <div className="flex flex-wrap">
            {
              productsJSX
            }
          </div>
        )
      }
      <Footer />
    </div>
  );
}