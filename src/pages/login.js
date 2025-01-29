import {useState} from 'react';
import { useRouter } from 'next/router';
import LoginForm from '@/components/LoginForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const router = useRouter();
  const [ error, setError ] = useState(false); 
  const [ errorMessage, setErrorMessage ] = useState("");

  async function handleLogin(email, password) {
    alert('Login clicked! ' + email);
    // fetch POST
    //       to url: https://coffee-shop-backend-5fmn.onrender.com/api/v2/users/login
    const payload = { email, password };

    // const response = await fetch("https://coffee-shop-backend-5fmn.onrender.com/api/v2/users/login", {
    // const response = await fetch("http://localhost:4000/api/v2/users/login", {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const data = await response.json();
    console.log(data);
    console.log(data.token);

    // Save the token in local storage...
    if(data.token && data.user) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      // if successful, go to products.
      setError(false);
      router.push('/products');
    } else {
      setError(true);
      setErrorMessage(data.error);
    }
  }

  return (
    <div>
      <Navbar />
      <h1>Login Up</h1>
      {error && (
        <div className="text-red-400 text-sm">
          Error: {errorMessage}
        </div>
      )}
      <LoginForm buttonLabel="Login" handleLogin={handleLogin}/>
      <Footer />
    </div>
  );
}