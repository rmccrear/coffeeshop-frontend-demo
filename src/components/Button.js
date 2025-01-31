// components/Button.js
import PropTypes from 'prop-types';

const btnClasses = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  error: "btn btn-error",
  link: "btn btn-link"
}

export default function Button({ label, handleClick, variant="primary" }) {
  return (
  <button 
    type="submit"
    className={btnClasses[variant] ? btnClasses[variant] : 'btn btn-primary' }
    onClick={handleClick}
  >
    {label}
  </button>
  );
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
};
