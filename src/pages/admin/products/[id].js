import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ProductCard from "@/components/ProductCard";

import useAuth from "@/hooks/auth";
// UPDATE

export default function AdminProduct() {
  const {token} = useAuth();
  
  // TODO: create the delete function
  // We need the id
  // We need the token.
  // We need to fetch DELETE

  // TODO: get and display the product
  // We need the product??


  return (
    <>
      <Navbar />
      New admin product card component goes here.
      <Footer content="Coffee Shop" />
    </>
  );
}