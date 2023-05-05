import { Link } from 'react-router-dom';
import LoginForm from '../../ui/Login/LoginForm.tsx';

function Login() {
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
