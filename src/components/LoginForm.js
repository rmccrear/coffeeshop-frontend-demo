import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function LoginForm({ buttonLabel, handleLogin}) {
  function handleSubmit(event) {
    event.preventDefault();
    handleLogin();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <Button label={buttonLabel} />
    </form>
  );
}

LoginForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
};