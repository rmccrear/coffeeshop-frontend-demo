import { useRouter } from 'next/router';
import {useState} from 'react';
import SignupForm from '@/components/SignupForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const registerURL = `${BACKEND_URL}/users/register`;

// const url = "https://coffee-shop-backend-5fmn.onrender.com/api/v2/users/register";

export default function Signup() {
  const router = useRouter();
  const [error, setError] = useState('');
  async function handleSignup(user) {
    alert('Sign up clicked! Thank you ' + user.email);
    user.role = "admin";
    // fetch POST /register
    const response = await fetch(registerURL, {
      method: "POST",
      body: JSON.stringify(user),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const data = await response.json();
    if(data.error) {
      setError(data.error);
    } else{
      router.push('/login');
    }
  }
  return (
    <div className="container mx-5">
      <Navbar />
      <h1>Sign Up</h1>
      {
        error ? 
          <div className="text-red-400">
            An error occurred when signing up.
            {error}
          </div>
        : ""
      }
      <SignupForm buttonLabel="Sign Up" handleSignup={handleSignup} />
      <Footer />
    </div>
  );
}