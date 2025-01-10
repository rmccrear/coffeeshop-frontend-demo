import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function SignupForm({ buttonLabel, handleSignup }) {
  return (
    <form className="form">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <Button label={buttonLabel} handleClick={handleSignup}/>
    </form>
  );
}

SignupForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
};