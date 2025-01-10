// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function ProductsPage() {
//   return (
//     <div className="container mx-auto px-4">
//       <Navbar />
//       <h1>Products Page</h1>
//       <Footer content="Coffee is great" />
//     </div>
//   );
// }

import ProductCard from '@/components/ProductCard';
import products from '@/mocks/products.json';

// const products = [
//   { _id: 1, name: 'Coffee A', description: 'Rich and smooth.', price: 10, image: '/coffee-a.jpg' },
//   { _id: 2, name: 'Coffee B', description: 'Dark roast.', price: 12, image: '/coffee-b.jpg' },
// ];

export default function ProductsPage() {
  
  const productsJSX = products.map((product) => {
    // Use key prop every time you use map.
    // This is a unique identifier for each product.
    // React is not smart enough to keep track of the order of items in a list.
    // so we need to give it help by providing a unique key prop.
    function addToCart() {
      alert("clicked add to cart " + product.name);
    }
    return (<ProductCard 
              key={product._id}
              product={product}
              addToCart={addToCart}
            />)
  });
  return (
    <div className="grid grid-rows-3 grid-flow-col">
      {
        productsJSX
      }
    </div>
  );
}