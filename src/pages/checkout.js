import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import CheckoutForm from '@/components/CheckoutForm';

export default function CheckoutPage() {

  function handleCheckout(event) {
    alert('Checkout clicked!');
  }

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl">Checkout Page</h1>

      <CheckoutForm handleCheckout={handleCheckout} />

      <Footer content="This is the footer content" />
    </div>
  );
}