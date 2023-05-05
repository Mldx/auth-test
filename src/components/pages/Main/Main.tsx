import { useState } from 'react';
import reactLogo from '../../../assets/react.svg';
import viteLogo from '/vite.svg';
import './Main.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store.ts';
import { Navigate } from 'react-router-dom';
import { userActions } from '../../../store/slices/userSlice.ts';

function Main() {
  const [count, setCount] = useState(0);
  const { isAuth } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  return isAuth ? (
    <>
      <button onClick={() => dispatch(userActions.removeUser())}>Log out</button>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  ) : (
    <Navigate replace to="/login" />
  );
}

export default Main;
