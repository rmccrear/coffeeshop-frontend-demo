import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  function handleCtaClick() {
    // alert("clicked!");
    console.log("CTA button clicked!");
    router.push("/signup");
  }

  return (
    <div>

<Navbar title="Home"></Navbar>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/coffee-hero.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">NO COFFEE COFFEE SHOP</h1>
            <p className="mb-5">
              The best coffee in N.O.
            </p>
            <Button label="Sign up" handleClick={handleCtaClick} />
          </div>
        </div>
      </div>
      <Footer content="© Robert"></Footer>

    </div>
  );
}