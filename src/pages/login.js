import { useRouter } from 'next/router';
import LoginForm from '@/components/LoginForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const router = useRouter();
  function handleLogin() {
    alert('Login clicked!');
    router.push('/products');
  }
  return (
    <div>
      <Navbar />
      <h1>Login Up</h1>
      <LoginForm buttonLabel="Login" handleLogin={handleLogin}/>
      <Footer />
    </div>
  );
}