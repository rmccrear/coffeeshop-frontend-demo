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
import { useAuthFetch } from '@/hooks/api';
import useAuth from "@/hooks/auth";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductsPage() {
  const router = useRouter();
  const { category } = router.query;
  console.log(category);

  const [cartContents, setCartContents] = useState([]);

  const { token } = useAuth();
  console.log(token);
  
  // const url = `${BACKEND_URL}/products`;
  const [url, setUrl] = useState(`${BACKEND_URL}/products`);
  const [productFetchError, productsLoading, products] = useAuthFetch(url, [], token);

  // We need productFetchError, productsLoading, products

  useEffect(() => {
    // Load cart from local storage
    const cartData = loadCartFromLocalStorage(); // get data from outside the component
    setCartContents(cartData); // set data inside the component

  }, []);

  // async function fetchFilteredProducts(category) {
  //   const url = `${BACKEND_URL}/products?category=${category}`;
  //   setProductsLoading(true);
  //   const result = await fetch(url);
  //   const productData = await result.json();
  //   setProductsLoading(false);
  //   setProducts(productData);
  // }

  // useEffect(() => {
  //   if (category) {
  //     console.log(category)
  //     fetchFilteredProducts(category);
  //   }
  // }, [category]);

  async function deleteProduct(product) {
    console.log("delete", product);
    const productId = product._id;
    const url = `https://coffee-shop-backend-5fmn.onrender.com/api/v2/products/${productId}`;
    console.log(url);
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const productsJSX = products.map((product) => {
    // Use key prop every time you use map.
    // This is a unique identifier for each product.
    // React is not smart enough to keep track of the order of items in a list.
    // so we need to give it help by providing a unique key prop.
    function handleDeleteProduct() {
      alert("delete " + product.name);
      deleteProduct(product);
    }
    return (<ProductCard
      key={product._id}
      product={product}
      buttonLabel="Delete"
      addToCart={handleDeleteProduct}
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
      <div className="flex justify-evenly">
        <span onClick={() => setUrl(`${BACKEND_URL}/products?category=beverages`)}>
          Beverages
        </span>
        <span onClick={() => setUrl(`${BACKEND_URL}/products?category=merchandise`)}>
          Merchandise
        </span>
        <span onClick={() => setUrl(`${BACKEND_URL}/products?category=books`)}>
          Books
        </span>
      </div>
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