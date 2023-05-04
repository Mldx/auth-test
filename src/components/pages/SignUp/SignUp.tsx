import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
      <h1>Sign up Page</h1>
      <p>
        Already have account? <Link to="/login">Login please</Link>
      </p>
    </>
  );
}

export default SignUp;
