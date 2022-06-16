import React from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './userpage.module.css';

const Userpage = (props) => {
  const navigate = useNavigate();
  return (
    <div className={Styles.userpage}>
      <h1>This is userpage!</h1>
      <div className={Styles.break}></div>
      <button
        className={Styles.btn}
        onClick={() => {
          navigate('/home');
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Userpage;
