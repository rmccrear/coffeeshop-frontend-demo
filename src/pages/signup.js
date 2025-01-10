import { useRouter } from 'next/router';
import SignupForm from '@/components/SignupForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Signup() {
  const router = useRouter();
  function handleSignup() {
    alert('Sign up clicked!');
    router.push('/signin');
  }
  return (
    <div>
      <Navbar />
      <h1>Sign Up</h1>
      <SignupForm buttonLabel="Sign Up" handleSignup={() => console.log('Sign up clicked!')}/>
      <Footer />
    </div>
  );
}