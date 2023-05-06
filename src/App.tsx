import { Route, Routes } from "react-router-dom";
import Welcome from "./components/pages/Welcome/Welcome";
import SignUp from "./components/pages/SignUp/SignUp";
import Main from "./components/pages/Main/Main";
import Login from "./components/pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}></Route>
      <Route path="main" element={<Main />}></Route>
      <Route path="signup" element={<SignUp />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="*" element={<h1>404 page</h1>}></Route>
    </Routes>
  );
}

export default App;
