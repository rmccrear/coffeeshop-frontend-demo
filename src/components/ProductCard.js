import PropTypes from "prop-types";
import Button from "./Button";


export default function ProductCard({ product, onAddToCart }) {
  // const { product, onAddToCart } = props;
  // const product = props.product;
  // const onAddToCart = props.onAddToCart;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={product.imageUrl} alt={product.name} />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div className="card-actions justify-end">
          <Button label="Add to Cart" handleClick={onAddToCart} ></Button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
