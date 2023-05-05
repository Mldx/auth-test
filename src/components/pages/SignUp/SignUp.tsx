import { Link } from 'react-router-dom';
import RegisterForm from '../../ui/Register/RegisterForm.tsx';

function SignUp() {
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
