import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useRouter } from 'next/router';
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

import { useFetch } from "@/hooks/api";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Get 'id' from the route params

  const url = `${BACKEND_URL}/products/${id}`;
  const [hasError, isLoading, product] = useFetch(url, {});

  // const product = products[id] || {};
  // const [product, setProduct] = useState({});

  // async function fetchProduct(id) {
  //   console.log("fetching the product");
  //   const result = await fetch(`${BACKEND_URL}/products/${id}`);
  //   const product = await result.json();
  //   setProduct(product);
  // }

  // useEffect(() => {
  //   console.log("hello from use effect with [id] " + id)
  //   fetchProduct(id);
  // }, [id]);

  function addToCart() {
    alert("clicked add to cart " + product.name);
    // TODO: add a fetch request to add the product to the cart
  }

  return (
    <div className="container mx-auto px-4" >
      <Navbar />
      <h1>Product Page for product &#35; {id}</h1>
      {
        isLoading ? (
          <div className="flex justify-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : ""
      }
      <ProductCard
        product={product}
        addToCart={addToCart}
      />
      <Footer content="Coffee is great" />
    </div>
  );
}
