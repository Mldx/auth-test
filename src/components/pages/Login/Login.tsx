import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <h1>Login Page</h1>
      <p>
        Haven&apos;t account? <Link to="/signup">Register please</Link>
      </p>
    </>
  );
}

export default Login;
