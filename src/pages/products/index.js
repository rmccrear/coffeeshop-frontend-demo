import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from '@/components/Loading';

import ProductCard from '@/components/ProductCard';
import productData from '@/mocks/products.json';
import {
  loadCartFromLocalStorage,
  saveCartToLocalStorage
} from '@/utils';



const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductsPage() {
  const router = useRouter();
  const { category } = router.query;

  const [products, setProducts] = useState([]);
  const [productFetchError, setProductFetchError] = useState(false);
  const [productsLoading, setProductsLoading] = useState(true);


  const [cartContents, setCartContents] = useState([]);

  console.log(category);

  async function fetchProducts() {
    const url = `${BACKEND_URL}/products`;
    try {
      setProductsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        console.log("fetch failed with " + response.status);
        setProductFetchError(true);
      }
      else {
        const productData = await response.json();
        setProducts(productData);
      }
    } catch (error) {
      console.log(error);
      setProductFetchError(true);
    } finally {
      setProductsLoading(false);
    }
  }

  useEffect(() => {
    // Load cart from local storage
    const cartData = loadCartFromLocalStorage(); // get data from outside the component
    setCartContents(cartData); // set data inside the component
    //TODO: get Product Data from server
    fetchProducts();
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

    } else {
      fetchProducts();
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
          <div className="grid grid-rows-3 grid-flow-col">
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