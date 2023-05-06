import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../../ui/Register/RegisterForm.tsx';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

function SignUp() {
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
      <h1>Register page</h1>
      <RegisterForm></RegisterForm>
      <p>
        Already have account? <Link to="/login">Login please</Link>
      </p>
    </>
  );
}

export default SignUp;
