import Button from "./Button";


export default function CheckoutForm({ handleCheckout }) {

  return (
    <form
      onSubmit={handleCheckout}
      className="flex flex-col space-y-4 max-w-md mx-auto">

      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Pikachu" id="name" />

      <label htmlFor="address">Address</label>
      <input type="text" placeholder="123 N Main St." id="address" />

      <label htmlFor="phone">Phone</label>
      <input type="phone" placeholder="(555)-555-5555" id="phone" />

      <Button label="Submit" />

    </form>);
};