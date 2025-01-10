import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useRouter } from 'next/router';

import products from '../../mocks/products.json';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Get 'id' from the route params
  const product = products[id] || {};

  function addToCart() {
    alert("clicked add to cart " + product.name);
    // TODO: add a fetch request to add the product to the cart
  }

  return (
    <div className="container mx-auto px-4" >
      <Navbar />
      <h1>Product Page for product &#35; {id}</h1>
      <ProductCard 
          product={product}
          onAddToCart={addToCart}
      />
      <Footer content="Coffee is great" />
    </div>
  );
}
