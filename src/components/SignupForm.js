import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/Button';


// Check if it is > 8 characters
function checkPassword(password) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
}

// Custom Hook
function usePasswordInput() {
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const onPasswordChange = (e) => {
    if (checkPassword(e.target.value)) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
    console.log(e.target.value);
    setPasswordValue(e.target.value);
  }
  return { passwordValue, passwordIsValid, onPasswordChange }
}

export default function SignupForm({ buttonLabel, handleSignup }) {
  const { passwordValue, passwordIsValid, onPasswordChange } = usePasswordInput();

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      fullName: e.target.elements.fullName.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    }
    console.log(user);
    if(passwordIsValid) {
      handleSignup(user);
    } else {
      alert("Password must be at least 8 characters long.");
    }
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" name="fullName" />
      <input type="email" placeholder="Email" name="email" />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={ passwordValue }
        onChange={ onPasswordChange }
      />
      <div className={ passwordIsValid ? "invisible text-xs" : "text-xs text-red-400 " }>
        Password must be at least 8 characters long.
      </div>
      <Button label={buttonLabel} />
    </form>
  );
}

SignupForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
};