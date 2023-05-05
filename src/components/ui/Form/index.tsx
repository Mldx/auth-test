import styles from './Form.module.scss';
import { useState } from 'react';

function Index(props: { handleSubmit: (email: string, pass: string) => void }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        props.handleSubmit(email, pass);
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="password"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        autoComplete="password"
      />
      <button>Click</button>
    </form>
  );
}

export default Index;
