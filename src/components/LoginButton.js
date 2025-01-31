import Button from "./Button";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  function handleClick() {
    loginWithRedirect();
  }
  return (
    // <Button handleClick={handleClick} label="log in with Auth0" variant="link" />
    <a onClick={handleClick}>log in with Auth0 </a>
  );
}
