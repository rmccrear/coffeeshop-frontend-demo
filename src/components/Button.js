// components/Button.js
import PropTypes from 'prop-types';
export default function Button({ label }) {
  return <button className="btn btn-primary ">{label}</button>;
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
};
