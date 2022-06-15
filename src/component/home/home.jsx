import React from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './home.module.css';

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <div className={Styles.home}>
      <h1>This is home!</h1>
      <button
        className={Styles.btn}
        onClick={() => {
          navigate('login');
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Home;
