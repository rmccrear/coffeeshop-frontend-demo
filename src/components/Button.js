// components/Button.js
import PropTypes from 'prop-types';
export default function Button({ label, handleClick, variant="primary" }) {
  return (
  <button className={`btn btn-${variant}`} onClick={handleClick}>
    {label}
  </button>
  );
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
};
