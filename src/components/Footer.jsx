// components/Navbar.js
import PropTypes from 'prop-types';
import "@/styles/Footer.module.css";
export default function Footer({content}) {
  return <div className="footer">{content}</div>;
}
Footer.propTypes = {
  // Add prop-types here
  content: PropTypes.string.isRequired,
};