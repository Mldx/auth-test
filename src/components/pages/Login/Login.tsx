import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../../ui/Login/LoginForm.tsx';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

function Login() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        navigate('/');
      }
    });

    return unsubscribe;
  }, [auth, navigate]);

  if (loading) {
    return null;
  }

  return (
    <>
      <h1>Login page</h1>
      <LoginForm></LoginForm>
      <p>
        Haven&apos;t account? <Link to="/signup">Register please</Link>
      </p>
    </>
  );
}

export default Login;
