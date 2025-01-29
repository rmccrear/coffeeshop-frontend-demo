import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function LoginForm({ buttonLabel, handleLogin}) {
  function handleSubmit(event) {
    event.preventDefault();
    // Get email and password from FORM
    console.log(event.target.elements.email);
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    handleLogin(email, password);
  }
  return (
    <form className="form flex flex-col" onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" name="email"/>
      <input type="password" placeholder="Password" name="password" />
      <Button label={buttonLabel}/>
    </form>
  );
}

LoginForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
};