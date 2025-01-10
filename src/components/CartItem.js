// components/Navbar.js
import PropTypes from 'prop-types';
import Button from '@/components/Button';
// Just like the ProductCard component, but a little shorter
export default function CartItem({product, removeFromCart}) {
  return <div className="card">
    <div className="card-body">
      <h1 className="card-title">{product.name}</h1>
      <p>${product.price}</p>
      <Button label="Remove" variant="error" handleClick={removeFromCart} />
    </div>
  </div>;
}

CartItem.propTypes = {
  // Add prop-types here
  product: PropTypes.object.isRequired,
};