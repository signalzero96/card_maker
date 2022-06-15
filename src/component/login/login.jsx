import React from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './login.module.css';

const Login = (props) => {
  const navigate = useNavigate();
  return (
    <div className={Styles.login}>
      <h1>This is login!</h1>
      <button
        className={Styles.btn}
        onClick={() => {
          navigate('home');
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Login;