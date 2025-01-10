// components/Navbar.js
import PropTypes from 'prop-types';
export default function Navbar({title, menuItems}) {
  return (
    <div className="navbar">Navbar Component {title} </div>
  );
}
Navbar.propTypes = {
  // Add prop-types here
   title: PropTypes.string.isRequired,
   menuItems: PropTypes.array.isRequired,
};