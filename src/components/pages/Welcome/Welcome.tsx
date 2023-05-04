import { Navigate } from 'react-router-dom';

function Welcome() {
  return <Navigate replace to="login" />;
}

export default Welcome;
