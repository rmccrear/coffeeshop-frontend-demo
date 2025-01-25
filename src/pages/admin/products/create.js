// import { useAuthFetch } from '@/hooks/api';
import useAuth from "@/hooks/auth";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";


export default function CreateProductPage() {
  const {token} = useAuth();
  console.log(token);

  // GOAL 1: say "Form Submitted" on submit
  function handleSubmit(event) {
    // prevent page from reloading.
    event.preventDefault();
    console.log(event);
    // 1. get all the input values, and alert them (or log them)
    //  (get values)
    const name = event.target.elements.name.value;
    const description = event.target.elements.description.value;
    const stock = event.target.elements.stock.value;
    const price = event.target.elements.price.value;
    const category = event.target.elements.category.value;

    // 2. then call createProduct
    const product = {
      name,
      description,
      category,
      stock,
      price
    }
    createProduct(product);

  }

  async function createProduct(product) {
    // const {name, description, price, stock} = product;
    console.table(product);
    // TODO: fetch with POST to create product
    try {
      const response = await fetch("https://coffee-shop-backend-5fmn.onrender.com/api/v1/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "...": "..." // ???? 
        }
      })
      const data = await response.json();
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  }
  //  (add event listeners)


  


  // GOAL 4: get token 
  //  (useAuth)

  // GOAL 5: FETCH POST
  //  (fetch)

  return (
    <>
      <Navbar />
      <h1 className="text-2xl">Create Product</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        {/* TODO: add labels */}
        <input type="text" placeholder="A product" name="name" />
        <input type="text" placeholder="a useful product..." name="description" />
        <input type="text" placeholder="category" name="category"/>
        <input type="number" placeholder="stock" name="stock"/>
        <input type="text" placeholder="price" name="price"/>
  
      <Button label="Create Product" />

      </form>
      <Footer />
    </>
  );
}