import React, { useState } from 'react';
import Styles from './home.module.css';
import GoogleLogin from 'react-google-login';

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin((current) => !current);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className={isLogin === false ? '' : Styles.login}>
      <div className={Styles.home}>
        <a href='https://www.youtube.com/watch?v=3zPnom6vpZo'>
          <img
            className={Styles.pic}
            src='./images/Jinsoul.png'
            alt='Jinsoul.jpg'
          />
        </a>
        <div className={Styles.break}></div>
        <h1 className={Styles.article}>This is home!</h1>
        <div className={Styles.break}></div>
        <button
          className={Styles.btn}
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
        <div className={isLogin === false ? Styles.modalOff : Styles.modalOn}>
          <div className={Styles.modal}>
            <div className={Styles.box}>
              <h1> Hello!!!! this is loona!!</h1>
              <div className={Styles.break}></div>
              <GoogleLogin
                className={Styles.GoogleLogin}
                clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
                buttonText='Login in google'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
              <div className={Styles.break}></div>
              <button
                className={Styles.login}
                onClick={() => {
                  handleLogin();
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
