import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store.ts';

function Welcome() {
  const { isAuth, email } = useSelector((state: RootState) => state.user);
  return isAuth ? (
    <>
      <h1>Hello {email}!</h1>
      <h2>
        Click to <Link to="/main">app</Link>
      </h2>
    </>
  ) : (
    <Navigate replace to="login" />
  );
}

export default Welcome;
