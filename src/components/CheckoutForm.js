import Button from "./Button";


export default function CheckoutForm({ handleCheckout }) {

  // Uncontrolled form
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const address = event.target.elements.address.value;
    const phone = event.target.elements.phone.value;
    handleCheckout(name, address, phone);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 max-w-md mx-auto">

      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Pikachu" id="name" name="name" />

      <label htmlFor="address">Address</label>
      <input type="text" placeholder="123 N Main St." id="address" name="address"/>

      <label htmlFor="phone">Phone</label>
      <input type="phone" placeholder="(555)-555-5555" id="phone" name="phone" />

      <Button label="Submit" />

    </form>);
};