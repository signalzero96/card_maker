import React from 'react';
import Login from './component/login/login';
import styles from './app.module.css';
import Maker from './component/maker/maker';
import { Routes, Route } from 'react-router-dom';

function App({ FileInput, authService }) {
  return (
    <div className={styles.app}>
      <Routes>
        <Route exact path='/' element={<Login authService={authService} />} />
        <Route
          path='/maker'
          element={<Maker FileInput={FileInput} authService={authService} />}
        />
      </Routes>
    </div>
  );
}

export default App;
