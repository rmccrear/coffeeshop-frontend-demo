// components/Navbar.js
import PropTypes from 'prop-types';
export default function Footer({content}) {
  return <div className="footer">Footer Component {content}</div>;
}
Footer.propTypes = {
  // Add prop-types here
   content: PropTypes.string.isRequired,
};