import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
  const { logout } = useAuth0();
  function handleClick() {
    logout({logoutParams: {returnTo: process.env.PUBLIC_NEXT_REDIRECT_URL} });
  }
  return (
    // <Button handleClick={handleClick} label="log in with Auth0" variant="link" />
    <a onClick={handleClick}>log out with Auth0 </a>
  );
}
