import Button from './Button';

const meta = {
  component: Button,
};

export default meta;

export const Default = {
  args: {
    label: "Buy Now"
  }
};

export const BuyLater = {
  args: {
    label: "Buy Later ~_~"
  }
};

export const BuyTwo = {
  args: {
    label: "Buy Two!!",
    handleClick: () => alert('You bought two!')
  }
};

export const Login = {
  args: {
    label: "Login"
  }
};