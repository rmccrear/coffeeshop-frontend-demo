// components/Button.js
import PropTypes from 'prop-types';
export default function Button({ label, handleClick }) {
  return (
  <button className="btn btn-primary" onClick={handleClick}>
    {label}
  </button>
  );
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
};
