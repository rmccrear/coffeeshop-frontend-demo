// components/Navbar.js
import Link from 'next/link';
import PropTypes from 'prop-types';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

// import useAuth from '@/hooks/auth';
// import { useAuth } from '@/context/AuthContext';
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {

  const { user, isAuthenticated, isLoading } = useAuth0();
  // const { user } = {name: "Mr. Cat", role: "user"} //  useAuth();
  // const { user } =  useAuth();

  // home, login, products

  let menuItemsJSX;

  // WE WANT THE USER NAME (FROM THE USER OBJECT)
  // if(user && user.role==="user") {
  //   menuItemsJSX = (
  //     <>
  //       <li><Link href="/">Home</Link></li>
  //       <li><Link href="/products">Products</Link></li>
  //       <li><Link href="/cart">Cart</Link></li>
  //       {/* TODO: LOGOUT */}
  //       <li><Link href="/">Logout</Link></li>
  //     </>
  //   );
  // } else if(user && user.role==="admin") {
  //   menuItemsJSX = (
  //     <>
  //       <li><Link href="/">Home</Link></li>
  //       <li><Link href="/products">Products</Link></li>
  //       <li><Link href="/cart">Cart</Link></li>
  //       <li><Link href="/admin">Admin</Link></li>
  //       {/* TODO: admin stuff goes here */}
  //       {/* TODO: LOGOUT */}
  //       <li><Link href="/">Logout</Link></li>
  //     </>
  //   );
  if (isAuthenticated) {
    menuItemsJSX = (
      <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/cart">Cart</Link></li>
        {/* TODO: LOGOUT */}
        <li><LogoutButton /></li>
        {/* <li><img src={user.picture} alt="user avatar" /></li> */}
        <li><a>Welcome {user.name}</a></li> 
      </>
    );
  } else {
    menuItemsJSX = (
      <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Products</Link></li>
        {/* <li><Link href="/login">Login</Link></li> */}
        {isLoading ? (
          <li><a>loading...</a></li>
        )
          : (
            <li><LoginButton /></li>
        )}
      </>
    );
  }


  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">N.O. COFFEE</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {menuItemsJSX}
        </ul>
      </div>
    </div>
  );
}
Navbar.propTypes = {
  // Add prop-types here
  title: PropTypes.string.isRequired,
};