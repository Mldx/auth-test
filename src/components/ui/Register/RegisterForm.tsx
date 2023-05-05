import Index from '../Form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../store/slices/userSlice.ts';
import { AppDispatch } from '../../../store/store.ts';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user: { email, uid } }) => {
        dispatch(
          userActions.setUser({
            email: email,
            id: uid,
            isAuth: true,
          })
        );
        navigate('/');
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return <Index handleSubmit={handleLogin} />;
}

export default LoginForm;
