import Loader from './Loading';

const meta = {
  component: Loader,
};

export default meta;

export const Default = {
  args: {
    isLoading: true
  }
};

export const Loaded = {
  args: {
    isLoading: false
  }
};