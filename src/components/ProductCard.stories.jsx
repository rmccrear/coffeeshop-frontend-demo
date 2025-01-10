import ProductCard from './ProductCard';
import { action } from '@storybook/addon-actions';

const meta = {
  component: ProductCard,
};

export default meta;

export const Default = {
  args: {
    product: {
      "name": "Cappuccino",
      "description": "An Italian coffee drink that is traditionally prepared with equal parts espresso, steamed milk, and milk foam.",
      "price": 3.5,
      "category": "Beverage",
      "stock": 5,
      "imageUrl": "/sample-images/cappuccino.jpg",
      "_id": 1
    },
    onAddToCart: action("onAddToCart")
  }
};