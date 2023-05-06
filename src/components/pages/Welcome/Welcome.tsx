import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

function Welcome() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        navigate('/login');
      }
    });
    return unsubscribe;
  });

  return (
    !loading && (
      <>
        <h1>Hello {auth.currentUser?.email}!</h1>
        <h2>
          Click to <Link to="/main">app</Link>
        </h2>
      </>
    )
  );
}

export default Welcome;
