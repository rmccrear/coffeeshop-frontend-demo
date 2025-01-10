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

      <div className="hero min-h-screen" style={{
    backgroundImage: "url(/coffee-hero.jpg)",
  }}>
        <div className="hero-content text-center">
          <h1>NO COFFEE COFFEE SHOP</h1>
          <p> The best coffee this side of the Mississippi.</p>
          <Button label="Sign up" handleClick={handleCtaClick}>
          </Button>
        </div>
      </div>

      <Footer content="© Robert"></Footer>

    </div>
  );
}